import {Box, Typography} from '@mui/joy'
import ToggleSwitch from '../../../navbar/components/ToggleSwitch'

const ToggleComponent = () => {
  const activeToggle = 'Your Chatbot is Online! Give chad  a command in your twitch channel'
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Typography style={{fontWeight: 'bold', color: 'black'}}>On/Off</Typography>
      <ToggleSwitch activeToggle={activeToggle} />
    </Box>
  )
}

export default ToggleComponent
