import {Divider, Menu, MenuItem, Switch, useColorScheme} from '@mui/joy'
import SignOutButton from '../signOut'
import {useLoginContext} from '../../../auth/LoginContext'

const ThemeSwitch = () => {
  const {mode, setMode} = useColorScheme()
  return (
    <Switch
      checked={mode === 'dark'}
      onChange={() => setMode(mode === 'light' ? 'dark' : 'light')}
      sx={{ml: 1}}
    />
  )
}

interface MobilePfpDropdownProps {
  mobileDisplay: boolean
}
const MobilePfpDropdown = ({mobileDisplay}: MobilePfpDropdownProps) => {
  if (!mobileDisplay) return null

  return (
    <>
      <MenuItem href="/">Home</MenuItem>
      <MenuItem href="/about">About</MenuItem>
      <MenuItem href="/chatbot">Chat Bot</MenuItem>
      <MenuItem href="/contact">Contact</MenuItem>
      <Divider />
    </>
  )
}

type PfpDropdown = {
  mobileDisplay: boolean
}
const PfpDropdownItems = ({mobileDisplay}: PfpDropdown) => {
  const {mode, setMode} = useColorScheme()
  const loginContext = useLoginContext()

  return (
    <Menu>
      <MobilePfpDropdown mobileDisplay={mobileDisplay} />
      <MenuItem>
        {mode} <ThemeSwitch />
      </MenuItem>
      <MenuItem href="/profile">Profile</MenuItem>
      <MenuItem href="/settings">Settings</MenuItem>
      {loginContext.profile?.username?.toLocaleLowerCase() === 'therealchadgpt' && (
        <MenuItem href="/admin">Admin</MenuItem>
      )}
      <MenuItem>
        <SignOutButton />
      </MenuItem>
    </Menu>
  )
}

export default PfpDropdownItems
