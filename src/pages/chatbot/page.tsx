/* File: /app/chatbot/page.tsx
 * Purpose: create a page for chatbot
 */

import ControlPanel from './ControlPanel'
import Typography from '@mui/joy/Typography'
import {Container, Button, Select, Option, IconButton, Box} from '@mui/joy'
import {useLoginContext} from '../../auth/LoginContext'
import {Persona, Personality} from '../../Protos/TwitchBot_pb'
import {useEffect, useState} from 'react'
import {createPersona, getPersonas} from '../../services/twitch/TwitchBotService'
import {getEnumKey} from '../../utils/EnumTools'
import {AiFillDelete} from 'react-icons/ai'

const ChatBotPage = () => {
  const loginContext = useLoginContext()
  const [selectedPersonality, setSelectedPersonality] = useState<Personality>(Personality.CHAD)
  const [personas, setPersonas] = useState<Persona[]>([])

  // get the personas from the db
  useEffect(() => {
    // get the personas from the db
    getPersonas().then(res => {
      if (!res) {
        console.error('No personas found!')
        return
      }
      setPersonas(res.getPersonasList())
    })
  }, [])

  const handleCreatePersona = () => {
    // send RPC request to create a new persona
    createPersona(selectedPersonality.toString(), selectedPersonality).then(res => {
      if (!res) {
        console.error('Failed to create persona!')
        return
      }
      setPersonas(prevPersonas => [...prevPersonas, res])
    })
  }

  const handleDeletePersona = (personaId: number) => {
    // Logic to delete the persona
    console.log('Deleting persona with ID:', personaId)
    // You would typically call a service method to delete the persona from the database
  }

  return (
    <Container maxWidth="md">
      <Typography level="h3" m={5}>
        {loginContext?.profile?.username + "'s Chat Bot Control Room"}
      </Typography>
      {/* Create new persona button */}
      <Button variant="outlined" color="primary" onClick={handleCreatePersona}>
        Create New Persona
      </Button>

      {/* Dropdown for selecting persona */}
      <Select
        defaultValue={Personality.CHAD}
        onChange={(e, value) => {
          if (!value) return
          setSelectedPersonality(value)
        }}>
        {Object.keys(Personality).map(key => {
          if (key == 'UNKNOWN') return
          return <Option value={Personality[key as keyof typeof Personality]}>{key}</Option>
        })}
      </Select>

      {personas.map(persona => {
        return (
          <>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography level="h4" m={5}>
                {persona.getName()
                  ? persona.getName()
                  : getEnumKey(Personality, persona.getPersonality()) + ' ' + persona.getId()}
              </Typography>
              {/* add a button with a trashcan icon to delete the persona */}
              <IconButton
                size="lg"
                sx={{color: 'red'}}
                aria-label="delete"
                onClick={() => handleDeletePersona(persona.getId())}>
                <AiFillDelete size={30} />
              </IconButton>
            </Box>

            <ControlPanel persona={persona} />
          </>
        )
      })}
    </Container>
  )
}

export default ChatBotPage
