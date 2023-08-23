import {useEffect, useState} from 'react'
import BotStatus from './BotStatus'
import {Box} from '@mui/joy'
import BotSwitch from './BotSwitch'
import {checkJoined} from '../../../services/twitch/UserServices'
import {useLoginContext} from '../../../auth/LoginContext'

const JoinSwitch = () => {
  const loginContext = useLoginContext()
  const [joined, setJoined] = useState<boolean>(false)

  const botOnline = async () => {
    try {
      const displayName = loginContext.profile?.displayName
      const sub = loginContext.profile?.id
      if (!displayName || !sub) return
      setJoined(await checkJoined(displayName, sub))
    } catch (err) {
      console.log('Error checking if joined:', err)
    }
  }

  useEffect(() => {
    botOnline()
  }, [])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <BotStatus online={joined} />
      <BotSwitch online={joined} setOnline={setJoined} />
    </Box>
  )
}

export default JoinSwitch
