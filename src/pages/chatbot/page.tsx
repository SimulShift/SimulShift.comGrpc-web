/* File: /app/chatbot/page.tsx
 * Purpose: create a page for chatbot
 */

import ControlPanel from './ControlPanel'
import Typography from '@mui/joy/Typography'
import {Container} from '@mui/joy'
import {useLoginContext} from '../../auth/LoginContext'

const ChatBotPage = () => {
  const loginContext = useLoginContext()

  return (
    <Container maxWidth="md">
      <Typography level="h3" m={5}>
        {loginContext?.profile?.username + "'s Chat Bot Control Room"}
      </Typography>
      <ControlPanel />
    </Container>
  )
}

export default ChatBotPage
