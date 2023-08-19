'use client'
import {useState} from 'react'
import {Button, Dropdown, Menu, styled} from '@mui/joy'
import Pfp from './Pfp'
import PfpDropdownItems from './PfpDropdownItems'

type ProfilePicDropdownProps = {
  mobileDisplay: boolean
}

const ProfilePicButton = styled(Button)(({theme}: any) => ({
  backgroundColor: 'transparent',
  color: '#ffffff',
  borderRadius: '100%', // Make the button and everything around it round
  marginTop: 5,
  textTransform: 'none',
  fontWeight: 300,
  fontSize: '1.3rem',
  padding: '0.5rem 1rem',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0)', // Set background color to fully transparent on hover
  },
  '& .MuiTouchRipple-child': {
    backgroundColor: 'black',
  },
  '& .MuiTouchRipple-rippleVisible': {
    opacity: 0.5,
    animationDuration: '550ms',
    animationTimingFunction: theme.transitions.easing.easeInOut,
  },
}))

export type Anchor = null | (EventTarget & HTMLButtonElement)

const PfpMenu = ({mobileDisplay}: ProfilePicDropdownProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  return (
    <>
      <ProfilePicButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
        <Pfp width={mobileDisplay ? 50 : 40} />
      </ProfilePicButton>
      <Dropdown>
        <PfpDropdownItems mobileDisplay={mobileDisplay} />
      </Dropdown>
    </>
  )
}

export default PfpMenu
