import {Dispatch, SetStateAction} from 'react'
import {RpcError, StatusCode} from 'grpc-web'
import {
  TwitchBotAdminServicePromiseClient,
  TwitchBotServicePromiseClient,
} from '../../Protos/TwitchBot_grpc_web_pb'
import {
  JoinChannelRequest,
  LeaveChannelRequest,
  ReadyState,
  SetReplyToAllRequest,
  StartTmiRequest,
  TmiStatusRequest,
} from '../../Protos/TwitchBot_pb'
import {getEnumKey} from '../../utils/EnumTools'
import {Empty} from '../../Protos/Common_pb'

/* ============================================= */
/* =========== TwitchBotAdminService =========== */
/* ============================================= */

var client = new TwitchBotAdminServicePromiseClient(
  process.env.REACT_APP_GRPC_URL ?? 'localhost:8080',
  null,
  {
    withCredentials: true,
  },
)

export const getTmiStatusRpc = async (setTmiStatusStr: Dispatch<React.SetStateAction<string>>) => {
  try {
    const request = new TmiStatusRequest()
    const res = await client.tmiStatus(request)
    const readystate = getEnumKey(ReadyState, res.getReadystate())
    console.log('tmi status readystate', readystate)
    setTmiStatusStr(readystate)
  } catch (err) {
    if (err instanceof RpcError) {
      console.log(
        'error getting tmi status with error code:',
        getEnumKey(StatusCode, err.code),
        err,
      )
      setTmiStatusStr(err.message)
    } else {
      console.log('error getting tmi status:', err)
      setTmiStatusStr('Unknown Error in getTmiStatusRpc:' + err)
    }
  }
}

export const startTmiRpc = async (setTmiStatusStr: Dispatch<React.SetStateAction<string>>) => {
  try {
    const res = await client.startTmi(new StartTmiRequest())
    console.log('tmi started', res)
    setTmiStatusStr(getEnumKey(ReadyState, res.getReadystate()))
  } catch (err) {
    if (err instanceof RpcError) {
      console.log('error starting tmi:', err)
      setTmiStatusStr('Error starting tmi')
    } else {
      console.log('error starting tmi:', err)
    }
  }
}

export const stopTmiRpc = async (setTmiStatusStr: Dispatch<SetStateAction<string>>) => {
  try {
    const res = await client.stopTmi(new StartTmiRequest())
    console.log('tmi stopped', res)
    setTmiStatusStr(getEnumKey(ReadyState, res.getReadystate()))
  } catch (err) {
    if (err instanceof RpcError) {
      console.log('error stopping tmi:', err)
      setTmiStatusStr('Error stopping tmi')
    } else {
      console.log('error stopping tmi:', err)
    }
  }
}

export const getJoinedChannelsRpc = async (
  setJoinedChannels: Dispatch<SetStateAction<string[]>>,
) => {
  try {
    const response = await client.getJoinedChannels(new StartTmiRequest())
    setJoinedChannels(response.getChannelsList())
  } catch (err) {
    if (err instanceof RpcError) {
      console.log('error getting joined channels:', err)
    } else {
      console.log('error getting joined channels:', err)
    }
  }
}
