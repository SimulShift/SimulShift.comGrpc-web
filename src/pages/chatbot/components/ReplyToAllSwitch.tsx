import styled from '@emotion/styled'
import {Switch, Tooltip} from '@mui/joy'
import {useLoginContext} from '../../../auth/LoginContext'
import {BotSwitchProps} from './BotSwitchContainer'
import {setReplyToAllRpc} from '../../../services/twitch/TwitchBotService'

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

const ReplyToAllSwitch = ({status, setStatus}: BotSwitchProps) => {
  const loginContext = useLoginContext()
  const defaultActiveToggle = activeToggle ?? 'Switched On'
  const defaultInactiveToggle = inactiveToggle ?? 'Switched Off'

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked
    const displayName = loginContext.profile?.username
    const sub = loginContext.profile?.id
    console.log('ReplyToAll Switch pressed! checked:', checked)
    if (!displayName || !sub) {
      console.log('Missing displayName or sub!')
      return
    }
    setReplyToAllRpc(setStatus, checked)
  }

  return (
    <Tooltip title={status ? defaultActiveToggle : defaultInactiveToggle} arrow>
      <MuiSwitchLarge size="md" sx={{m: 2}} checked={status ?? false} onChange={handleChange} />
    </Tooltip>
  )
}
export default ReplyToAllSwitch
