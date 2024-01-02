import {Dispatch, SetStateAction} from 'react'
import Switch from '@mui/joy/Switch'
import {styled} from '@mui/joy/styles'
import {startTmiRpc, stopTmiRpc} from '../../services/twitch/TwitchBotAdminService'

export const MuiSwitchLarge = styled(Switch)(({theme}) => ({
  width: 68,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      transform: 'translateX(30px)',
    },
  },
  '& .MuiSwitch-thumb': {
    width: 32,
    height: 32,
  },
  '& .MuiSwitch-track': {
    borderRadius: 20 / 2,
  },
}))

type tmiSwitchProps = {
  status: string
  setTmiStatusStr: Dispatch<SetStateAction<string>>
}

const TmiSwitch = ({status, setTmiStatusStr}: tmiSwitchProps) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const checked = event.target.checked
    checked ? startTmiRpc(setTmiStatusStr) : stopTmiRpc(setTmiStatusStr)
  }

  return (
    <MuiSwitchLarge size="md" sx={{m: 10}} checked={status === 'OPEN'} onChange={handleChange} />
  )
}

export default TmiSwitch
