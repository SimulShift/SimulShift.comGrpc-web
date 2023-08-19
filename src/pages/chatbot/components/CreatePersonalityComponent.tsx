import {Box, Typography} from '@mui/joy'

const CreatePersonalityComponent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '80px',
      }}>
      <Typography style={{fontWeight: 'bold', color: 'black'}}>
        Create your own Personality
      </Typography>
    </Box>
  )
}

export default CreatePersonalityComponent
