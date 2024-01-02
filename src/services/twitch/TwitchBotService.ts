/* ============================================= */
/* ============= TwitchBotService ============== */
/* ============================================= */

import {Empty} from '../../Protos/Common_pb'
import {TwitchBotServicePromiseClient} from '../../Protos/TwitchBot_grpc_web_pb'
import {
  CreatePersonaRequest,
  DeletePersonaRequest,
  JoinChannelRequest,
  LeaveChannelRequest,
  Personality,
  ReadyState,
  SetReplyToAllRequest,
  SwitchPersonalityRequest,
} from '../../Protos/TwitchBot_pb'
import {getEnumKey} from '../../utils/EnumTools'

var twitchBotServiceClient = new TwitchBotServicePromiseClient(
  process.env.REACT_APP_GRPC_URL ?? 'localhost:8080',
  null,
  {
    withCredentials: true,
  },
)

export const getPersonas = async () => {
  try {
    return await twitchBotServiceClient.getPersonaDataForUser(new Empty())
  } catch (err) {
    console.log('error checking joined:', err)
  }
}

export const createPersona = async (personaName: string, personality: Personality) => {
  try {
    const req = new CreatePersonaRequest().setName(personaName).setPersonality(personality)
    return await twitchBotServiceClient.createPersona(req)
  } catch (err) {
    console.log('error creating persona:', err)
  }
}

export const joinChannelRpc = async (personaId: number, setOnline: (online: boolean) => void) => {
  try {
    const res = await twitchBotServiceClient.joinChannel(
      new JoinChannelRequest().setPersonaid(personaId),
    )
    console.log('joinChannel response', getEnumKey(ReadyState, res.getReadystate()))
    setOnline(true)
  } catch (err) {
    console.log('error joining channel:', err)
  }
}

export const leaveChannelRpc = async (personaId: number, setStatus: (status: boolean) => void) => {
  try {
    await twitchBotServiceClient.leaveChannel(new LeaveChannelRequest().setPersonaid(personaId))
    setStatus(false)
  } catch (err) {
    console.log('error leaving channel:', err)
  }
}

export const setReplyToAllRpc = async (
  setStatus: (status: boolean) => void,
  personaId: number,
  replyToAll: boolean,
) => {
  try {
    const req = new SetReplyToAllRequest().setReplytoall(replyToAll).setPersonaid(personaId)
    await twitchBotServiceClient.setReplyToAll(req)
    setStatus(replyToAll)
  } catch (err) {
    console.log('error setting reply to all:', err)
  }
}

export const deletePersonaRpc = async (personaId: number) => {
  try {
    await twitchBotServiceClient.deletePersonaRpc(
      new DeletePersonaRequest().setPersonaid(personaId),
    )
  } catch (err) {
    console.log('error deleting persona:', err)
  }
}

export const switchPersonalityRpc = async (personaId: number, personality: Personality) => {
  try {
    await twitchBotServiceClient.switchPersonalityRpc(
      new SwitchPersonalityRequest().setPersonaid(personaId).setPersonality(personality),
    )
  } catch (err) {
    console.log('error switching personality:', err)
  }
}
