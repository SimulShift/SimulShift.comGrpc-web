import {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import {Switch, Tooltip} from '@mui/joy'
import {redirect} from 'react-router-dom'
import UrlBuilder, {AuthEndPoints} from '../../../utils/UrlBuilder'
import {useLoginContext} from '../../../auth/LoginContext'
import {checkJoinedrpc, joinChannelRpc, leaveChannelRpc} from '../../../services/TwitchServices'

const activeToggle = 'Your Chatbot is Online! Give chad  a command in your twitch channel'
const inactiveToggle =
  'Your Chatbot is Offline! Turn it on to give chad commands in your twitch channel'
export const MuiSwitchLarge = styled(Switch)(({theme}) => ({
  width: 150,
  height: 70,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    top: '50%',
    padding: 0,
    transform: 'translateY(-50%) translateX(6px)',
    '&.Mui-checked': {
      transform: 'translateX(85px) translateY(-50%)',
    },
  },
  '& .MuiSwitch-thumb': {
    width: 32,
    height: 32,
  },
  '& .MuiSwitch-track': {
    borderRadius: 30,
  },
}))

type BotSwitchProps = {
  online: boolean
  setOnline: (online: boolean) => void
}

const BotSwitch = ({online, setOnline}: BotSwitchProps) => {
  const loginContext = useLoginContext()
  const defaultActiveToggle = activeToggle ?? 'Switched On'
  const defaultInactiveToggle = inactiveToggle ?? 'Switched Off'

  useEffect(() => {
    // Check if the sessionId and profile cookies exist
    if (!loginContext.profile || !loginContext.loggedIn) {
      // If either of the cookies is missing, redirect the user to the login page
      const loginUrl = new UrlBuilder().auth(AuthEndPoints.twitch).build()
      redirect(loginUrl)
    }
    checkJoinedrpc(setOnline)
  }, [])

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked
    const displayName = loginContext.profile?.username
    const sub = loginContext.profile?.id
    console.log('Switch pressed! checked:', checked)
    if (!displayName || !sub) {
      console.log('Missing displayName or sub!')
      return
    }
    checked ? joinChannelRpc(setOnline) : leaveChannelRpc(setOnline)
  }

  return (
    <Tooltip title={online ? defaultActiveToggle : defaultInactiveToggle} arrow>
      <MuiSwitchLarge size="md" sx={{m: 2}} checked={online ?? false} onChange={handleChange} />
    </Tooltip>
  )
}
export default BotSwitch
