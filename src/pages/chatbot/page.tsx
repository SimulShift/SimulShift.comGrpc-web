'use client'
/* File: /app/chatbot/page.tsx
 * Purpose: create a page for chatbot
 * Author: SimulShift
 */

import ControlPanel from './ControlPanel'
import Typography from '@mui/joy/Typography'
import {Container} from '@mui/joy'

const ChatBotPage = () => {
  const session: any = null

  return (
    <Container maxWidth="md">
      <Typography level="h3" m={5}>
        {session?.user?.name + "'s Chat Bot Control Room"}
      </Typography>
      <ControlPanel />
    </Container>
  )
}

export default ChatBotPage
