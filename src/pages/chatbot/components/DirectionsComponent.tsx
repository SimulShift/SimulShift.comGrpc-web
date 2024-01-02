import {Box, Typography} from '@mui/joy'

const DirectionsComponent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '65px',
      }}>
      <Typography style={{fontWeight: 'bold', color: 'black'}}>Directions</Typography>
      <Typography>
        Press the joined channel switch! the bot will automatically join your channel
      </Typography>
    </Box>
  )
}

export default DirectionsComponent
