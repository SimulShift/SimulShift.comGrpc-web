import {Divider, MenuItem, Switch, Typography} from '@mui/joy'
import SignOutButton from '../signOut'
import {useContext} from 'react'
import {setThemeModeContext} from '../../Theme/ThemeRegistry'
import {getProfile} from './pfpHelpers'

const ThemeSwitch = () => {
  const setThemeMode = useContext(setThemeModeContext)
  return (
    <Switch
      onChange={() => setThemeMode(prev => (prev === 'light' ? 'dark' : 'light'))}
      sx={{ml: 1}}
    />
  )
}

const profile = getProfile()

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
  return (
    <>
      <MobilePfpDropdown mobileDisplay={mobileDisplay} />
      <MenuItem>
        Light Mode <ThemeSwitch />
      </MenuItem>
      <MenuItem href="/profile">Profile</MenuItem>
      <MenuItem href="/settings">Settings</MenuItem>
      {profile?.displayName?.toLocaleLowerCase() === 'therealchadgpt' && (
        <MenuItem href="/admin">Admin</MenuItem>
      )}
      <MenuItem>
        <SignOutButton className="block hover:bg-pink-900 hover:text-white px-4 py-2 rounded-md" />
      </MenuItem>
    </>
  )
}

export default PfpDropdownItems
