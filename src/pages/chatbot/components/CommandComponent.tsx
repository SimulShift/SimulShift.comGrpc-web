import {Box, Typography} from '@mui/joy'
import {Persona} from '../../../Protos/TwitchBot_pb'

type CommandComponentProps = {
  persona: Persona
}

const CommandComponent = ({persona}: CommandComponentProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Typography style={{fontWeight: 'bold', color: 'black'}}>Command</Typography>
      {persona.getCommandsList().map(command => {
        return <Typography>{command}</Typography>
      })}
    </Box>
  )
}

export default CommandComponent
