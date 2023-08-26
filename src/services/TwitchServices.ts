import {Dispatch} from 'react'
import {RpcError, StatusCode} from 'grpc-web'
import {
  TwitchBotAdminServicePromiseClient,
  TwitchBotServicePromiseClient,
} from '../Protos/TwitchBot/TwitchBot_grpc_web_pb'
import {
  JoinChannelRequest,
  LeaveChannelRequest,
  ReadyState,
  StartTmiRequest,
  TmiStatusRequest,
} from '../Protos/TwitchBot/TwitchBot_pb'
import {getEnumKey} from '../utils/EnumTools'

/* ============================================= */
/* =========== TwitchBotAdminService =========== */
/* ============================================= */

var client = new TwitchBotAdminServicePromiseClient('http://localhost:8080', null, {
  withCredentials: true,
})

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
      setTmiStatusStr('Error getting tmi status ' + err)
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

export const stopTmiRpc = async (setTmiStatusStr: Dispatch<React.SetStateAction<string>>) => {
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

/* ============================================= */
/* ============= TwitchBotService ============== */
/* ============================================= */

var twitchBotServiceClient = new TwitchBotServicePromiseClient('http://localhost:8080', null, {
  withCredentials: true,
})

export const joinChannelRpc = async () => {
  try {
    const res = await twitchBotServiceClient.joinChannel(new JoinChannelRequest())
    console.log('joinChannel response', res)
  } catch (err) {
    console.log('error joining channel:', err)
  }
}

export const leaveChannelRpc = async () => {
  try {
    const res = await twitchBotServiceClient.leaveChannel(new LeaveChannelRequest())
    console.log('leaveChannel response', res)
  } catch (err) {
    console.log('error leaving channel:', err)
  }
}
