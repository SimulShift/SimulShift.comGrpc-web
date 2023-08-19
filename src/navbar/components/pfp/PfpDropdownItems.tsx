import {Divider, Menu, MenuItem, Switch, useColorScheme} from '@mui/joy'
import SignOutButton from '../signOut'
import {useLoginContext} from '../../../auth/LoginContext'

const ThemeSwitch = () => {
  const {mode, setMode} = useColorScheme()
  return <Switch onChange={() => setMode(mode === 'light' ? 'dark' : 'light')} sx={{ml: 1}} />
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
  const loginContext = useLoginContext()

  return (
    <>
      <Menu>
        <MobilePfpDropdown mobileDisplay={mobileDisplay} />
        <MenuItem>
          Light Mode <ThemeSwitch />
        </MenuItem>
        <MenuItem href="/profile">Profile</MenuItem>
        <MenuItem href="/settings">Settings</MenuItem>
        {loginContext.profile?.displayName?.toLocaleLowerCase() === 'therealchadgpt' && (
          <MenuItem href="/admin">Admin</MenuItem>
        )}
        <MenuItem>
          <SignOutButton className="block hover:bg-pink-900 hover:text-white px-4 py-2 rounded-md" />
        </MenuItem>
      </Menu>
    </>
  )
}

export default PfpDropdownItems
