import {Box, Typography} from '@mui/joy'

const HistoryComponent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Typography style={{fontWeight: 'bold', color: 'black'}}>Message History</Typography>
      <div>--------</div>
      <div>--------</div>
      <div>--------</div>
      <div>--------</div>
      <div>--------</div>
      <div>--------</div>
      <div>--------</div>
    </Box>
  )
}

export default HistoryComponent
