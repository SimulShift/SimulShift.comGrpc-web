import {useState} from 'react'
import BotStatus from './SwitchStatus'
import {Box} from '@mui/joy'
import {Personality} from '../../../Protos/TwitchBot/TwitchBot_pb'

// Define the props interface
export interface SwitchContainerProps {
  SwitchComponent: React.ComponentType<BotSwitchProps>
  personality: Personality
  statusMsg: string
}

export interface BotSwitchProps {
  status: boolean
  setStatus: React.Dispatch<React.SetStateAction<boolean>>
  personality: Personality
}

const BotSwitchContainer = ({SwitchComponent, personality, statusMsg}: SwitchContainerProps) => {
  const [status, setStatus] = useState<boolean>(false)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <BotStatus status={status} statusText={statusMsg} personality={personality} />
      <SwitchComponent status={status} setStatus={setStatus} personality={personality} />
    </Box>
  )
}

export default BotSwitchContainer
