import {useEffect, useState} from 'react'
import {Box, Select, Typography, Option} from '@mui/joy'
import {Persona, Personality} from '../../../Protos/TwitchBot_pb'
import {switchPersonalityRpc} from '../../../services/twitch/TwitchBotService'

type SelectPersonalityComponentProps = {
  persona: Persona
}

const SelectPersonalityComponent = ({persona}: SelectPersonalityComponentProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Typography style={{fontWeight: 'bold', color: 'black'}}>Select Personality</Typography>
      <Select
        defaultValue={Personality.CHAD}
        onChange={(e, value) => {
          if (!value) return

          // call rpc to change personality
          switchPersonalityRpc(persona.getId(), value)
        }}>
        {Object.keys(Personality).map(key => {
          if (key == 'UNKNOWN') return
          return (
            <Option key={key} value={Personality[key as keyof typeof Personality]}>
              {key}
            </Option>
          )
        })}
      </Select>
    </Box>
  )
}

export default SelectPersonalityComponent
