import PfpMenu from './components/pfp/PfpMenu'
import {List, ListItemButton, styled, useColorScheme, useTheme} from '@mui/joy'
import SimulShiftLogo from '../assets/SimulShiftLogo.png'
import {useEffect} from 'react'
import {useLoginContext} from '../auth/LoginContext'
import UrlBuilder, {AuthEndPoints} from '../utils/UrlBuilder'

type StyledNavLinkProps = {
  href: string
  children: React.ReactNode
  // Add any other props you want to use.
}

const ListLinkItemButton = styled(({href, ...otherProps}: StyledNavLinkProps) => (
  <ListItemButton component="a" href={href} {...otherProps} />
))`
  cursor: pointer;
`

const checkIfLoggedIn = async (): Promise<boolean> => {
  // define request object
  const requestData: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  }

  // check if logged in
  const urlBuilder = new UrlBuilder().auth(AuthEndPoints.twitch).checkLoggedIn().build()
  const res = await fetch(urlBuilder, requestData)
  const data = await res.json()
  console.log('finished checkinged if logged in', data)
  if (data.refetch) {
    // try to login again
    const refetchRes = await fetch(urlBuilder, {
      ...requestData,
      body: JSON.stringify({
        refetch: true,
      }),
    })
    const refetchData = await refetchRes.json()
    console.log('finished refetching', refetchData)
    return refetchData.loggedIn
  }

  return data.loggedIn
}

const SignInProfileChunk = () => {
  const loginContext = useLoginContext()

  if (loginContext.loggedIn) {
    return <PfpMenu mobileDisplay={false} />
  } else {
    return (
      <ListItemButton component="a" href={new UrlBuilder().auth(AuthEndPoints.twitch).build()}>
        Sign In
      </ListItemButton>
    )
  }
}

type NavbarProps = {
  style?: React.CSSProperties
}

const Navbar = ({style}: NavbarProps) => {
  const loginContext = useLoginContext()

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
        mb: style?.marginBottom,
      }}>
      <ListLinkItemButton href="/">
        <img
          src={SimulShiftLogo}
          alt="logo"
          placeholder="blur"
          width="0"
          height="0"
          sizes="100vw"
          style={{width: 40, height: 'auto'}}
        />
      </ListLinkItemButton>
      <ListLinkItemButton href="/">Home</ListLinkItemButton>
      <ListLinkItemButton href="/about">About</ListLinkItemButton>
      <ListLinkItemButton href="/chatbot">Chat Bot</ListLinkItemButton>
      <ListLinkItemButton href="/contact">Contact</ListLinkItemButton>
      {loginContext?.profile?.username == 'therealchadgpt' && (
        <ListLinkItemButton href="/admin">Admin</ListLinkItemButton>
      )}
      <SignInProfileChunk />
    </List>
  )
}

export default Navbar
