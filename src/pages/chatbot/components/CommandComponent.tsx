import {Box, Typography} from '@mui/joy'

const CommandComponent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Typography style={{fontWeight: 'bold', color: 'black'}}>Command</Typography>
      <div>!Chad,</div>
      <div>Chad,</div>
      <div>Hey Chad,</div>
    </Box>
  )
}

export default CommandComponent
