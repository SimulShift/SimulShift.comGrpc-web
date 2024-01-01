/* File: /app/chatbot/page.tsx
 * Purpose: create a page for chatbot
 */

import ControlPanel from './ControlPanel'
import Typography from '@mui/joy/Typography'
import {Container} from '@mui/joy'
import {useLoginContext} from '../../auth/LoginContext'
import {Persona} from '../../Protos/TwitchBot_pb'
import {useEffect, useState} from 'react'
import {getPersonas} from '../../services/TwitchServices'

const ChatBotPage = () => {
  const loginContext = useLoginContext()
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
  })

  return (
    <Container maxWidth="md">
      <Typography level="h3" m={5}>
        {loginContext?.profile?.username + "'s Chat Bot Control Room"}
      </Typography>
      {personas.map(persona => {
        return <ControlPanel persona={persona} />
      })}
    </Container>
  )
}

export default ChatBotPage
