import {Box, Typography} from '@mui/joy'
import Navbar from './Navbar'
import PfpMenu from './components/pfp/PfpMenu'
import {useEffect, useState} from 'react'

type MainNavProps = {
  style?: React.CSSProperties
}

const MainNav = ({style}: MainNavProps) => {
  const [isPhoneSize, setIsPhoneSize] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsPhoneSize(window.innerWidth <= 600) // Adjust the width as per your target iPhone size
    }
    handleResize() // Check the initial size

    // Attach the event listener to update the size when the window is resized
    window.addEventListener('resize', handleResize)

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []) // Empty dependency array ensures the effect runs only once

  return isPhoneSize ? (
    <Box m={1} display="flex" flexDirection="row" justifyContent="flex-end" alignItems="flex-end">
      <Typography level="h2" component="div" sx={{flexGrow: 1}}>
        SimulShift
      </Typography>
      <PfpMenu mobileDisplay={isPhoneSize} />
    </Box>
  ) : (
    <Navbar style={style} />
  )
}

export default MainNav
