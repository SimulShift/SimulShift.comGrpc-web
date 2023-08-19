import {Typography} from '@mui/joy'

type BotStatusProps = {
  online: boolean
}

const BotStatus = ({online}: BotStatusProps) => {
  return <Typography>{online ? 'Chat Bot is ON' : 'Chat Bot is OFF'}</Typography>
}

export default BotStatus
