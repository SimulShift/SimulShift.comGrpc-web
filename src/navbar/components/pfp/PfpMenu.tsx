import {Dropdown, MenuButton} from '@mui/joy'
import Pfp from './Pfp'
import PfpDropdownItems from './PfpDropdownItems'

type ProfilePicDropdownProps = {
  mobileDisplay: boolean
}

const PfpMenu = ({mobileDisplay}: ProfilePicDropdownProps) => {
  return (
    <Dropdown>
      <MenuButton sx={{border: 'none'}}>
        <Pfp width={mobileDisplay ? 50 : 40} />
      </MenuButton>
      <PfpDropdownItems mobileDisplay={mobileDisplay} />
    </Dropdown>
  )
}

export default PfpMenu
