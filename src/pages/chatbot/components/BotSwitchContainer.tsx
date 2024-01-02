import {useEffect, useState} from 'react'
import BotStatus from './SwitchStatus'
import {Box} from '@mui/joy'
import {Persona, Personality} from '../../../Protos/TwitchBot_pb'

// Define the props interface
export interface SwitchContainerProps {
  SwitchComponent: React.ComponentType<BotSwitchProps>
  persona: Persona
  statusMsg: string
  initialStatus: boolean
}

export interface BotSwitchProps {
  status: boolean
  setStatus: React.Dispatch<React.SetStateAction<boolean>>
  persona: Persona
}

const BotSwitchContainer = ({
  SwitchComponent,
  persona,
  statusMsg,
  initialStatus,
}: SwitchContainerProps) => {
  const [status, setStatus] = useState<boolean>(initialStatus)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <BotStatus status={status} statusText={statusMsg} personality={persona.getPersonality()} />
      <SwitchComponent status={status} setStatus={setStatus} persona={persona} />
    </Box>
  )
}

export default BotSwitchContainer
