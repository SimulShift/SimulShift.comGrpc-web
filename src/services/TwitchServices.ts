import {Dispatch, SetStateAction} from 'react'
import {RpcError, StatusCode} from 'grpc-web'
import {
  TwitchBotAdminServicePromiseClient,
  TwitchBotServicePromiseClient,
} from '../Protos/TwitchBot/TwitchBot_grpc_web_pb'
import {
  JoinChannelRequest,
  LeaveChannelRequest,
  ReadyState,
  SetReplyToAllRequest,
  StartTmiRequest,
  TmiStatusRequest,
} from '../Protos/TwitchBot/TwitchBot_pb'
import {getEnumKey} from '../utils/EnumTools'

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

/* ============================================= */
/* ============= TwitchBotService ============== */
/* ============================================= */

var twitchBotServiceClient = new TwitchBotServicePromiseClient(
  process.env.REACT_APP_GRPC_URL ?? 'localhost:8080',
  null,
  {
    withCredentials: true,
  },
)

export const checkJoinedrpc = async (setOnline: (online: boolean) => void) => {
  try {
    const res = await twitchBotServiceClient.checkJoined(new JoinChannelRequest())
    console.log('checkJoined response', res.getJoined())
    setOnline(res.getJoined())
  } catch (err) {
    console.log('error checking joined:', err)
  }
}

export const joinChannelRpc = async (setOnline: (online: boolean) => void) => {
  try {
    const res = await twitchBotServiceClient.joinChannel(new JoinChannelRequest())
    console.log('joinChannel response', getEnumKey(ReadyState, res.getReadystate()))
    setOnline(true)
  } catch (err) {
    console.log('error joining channel:', err)
  }
}

export const leaveChannelRpc = async (setStatus: (status: boolean) => void) => {
  try {
    const res = await twitchBotServiceClient.leaveChannel(new LeaveChannelRequest())
    console.log('leaveChannel response', getEnumKey(ReadyState, res.getReadystate()))
    setStatus(false)
  } catch (err) {
    console.log('error leaving channel:', err)
  }
}

export const setReplyToAllRpc = async (
  setStatus: (status: boolean) => void,
  replyToAll: boolean,
) => {
  try {
    const req = new SetReplyToAllRequest().setReplytoall(replyToAll)
    const res = await twitchBotServiceClient.setReplyToAll(req)
    setStatus(replyToAll)
    console.log('setReplyToAll response', getEnumKey(ReadyState, res.getReadystate()))
  } catch (err) {
    console.log('error setting reply to all:', err)
  }
}
