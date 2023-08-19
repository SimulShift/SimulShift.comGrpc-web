import PfpMenu from './components/pfp/PfpMenu'
import {List, ListItemButton, useTheme} from '@mui/joy'
import SimulShiftLogo from '../assets/SimulShiftLogo.png'
import {useEffect} from 'react'
import {useLoginContext} from '../auth/LoginContext'
import UrlBuilder, {AuthEndPoints} from '../utils/UrlBuilder'

const checkIfLoggedIn = async (): Promise<boolean> => {
  // check if logged in
  const urlBuilder = new UrlBuilder().auth(AuthEndPoints.twitch).checkLoggedIn().build()
  const res = await fetch(urlBuilder, {
    credentials: 'include',
  })
  const data = await res.json()
  //console.log('finished checkinged if logged in', data)
  return data.loggedIn
}

const SignInProfileChunk = () => {
  const loginContext = useLoginContext()
  if (loginContext.loggedIn) {
    return <PfpMenu mobileDisplay={false} />
  } else {
    return (
      <ListItemButton href={new UrlBuilder().auth(AuthEndPoints.twitch).build()}>
        Sign In
      </ListItemButton>
    )
  }
}

type NavbarProps = {
  style?: React.CSSProperties
}

const Navbar = ({style}: NavbarProps) => {
  const theme = useTheme()
  const loginContext = useLoginContext()

  useEffect(() => {
    //console.log('checking if logged in inside navbar', loginContext.loggedIn)
    loginContext.setLoggedIn(loginContext.loggedIn)
  }, [loginContext.loggedIn])

  useEffect(() => {
    checkIfLoggedIn().then(value => loginContext.setLoggedIn(value))
  }, [])

  return (
    <List
      orientation="horizontal"
      aria-label="Example application menu bar"
      role="menubar"
      data-joy-color-scheme="dark"
      sx={{
        bgcolor: `rgba(255,255,255, 0.2)`,
        borderRadius: '10px',
        maxWidth: 'fit-content',
        mt: style?.marginTop,
      }}>
      <ListItemButton href="/">
        <img
          src={SimulShiftLogo}
          alt="logo"
          placeholder="blur"
          width="0"
          height="0"
          sizes="100vw"
          style={{width: 40, height: 'auto'}}
        />
      </ListItemButton>
      <ListItemButton href="/">Home</ListItemButton>
      <ListItemButton href="/about">About</ListItemButton>
      <ListItemButton href="/chatbot">Chat Bot</ListItemButton>
      <ListItemButton href="/contact">Contact</ListItemButton>
      {loginContext?.profile?.displayName == 'therealchadgpt' && (
        <ListItemButton href="/admin">Admin</ListItemButton>
      )}
      <SignInProfileChunk />
    </List>
  )
}

export default Navbar
