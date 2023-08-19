import {useEffect, useState} from 'react'
import {Box, Typography} from '@mui/joy'
import {Personality, fetchPersonalities} from '../../../services/gpt/UserServices'
import SelectBar from '../../../navbar/components/SelectBar'

type PersonalityOption = {
  text: Personality
  value: Personality
}

const SelectPersonalityComponent = () => {
  const [personalityOptions, setPersonalityOptions] = useState<PersonalityOption[]>([
    {text: Personality.Helpful, value: Personality.Helpful},
  ])

  useEffect(() => {
    fetchPersonalities().then(personalities => {
      const options = personalities.map(personality => ({
        text: personality,
        value: personality,
      }))
      setPersonalityOptions(options)
    })
  }, [])

  const onChange = (newValue: string) => {
    console.log('Selected personality: ', newValue)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Typography style={{fontWeight: 'bold', color: 'black'}}>Select</Typography>
      <SelectBar onChange={onChange} options={personalityOptions} />
    </Box>
  )
}

export default SelectPersonalityComponent
