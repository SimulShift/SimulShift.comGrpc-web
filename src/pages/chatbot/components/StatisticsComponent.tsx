import {Box, Typography} from '@mui/joy'

const StatisticsComponent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Typography style={{fontWeight: 'bold', color: 'black'}}>Statistics</Typography>
      <div>1. Number of Messages</div>
      <div>2. Queries Left Command</div>
    </Box>
  )
}

export default StatisticsComponent
