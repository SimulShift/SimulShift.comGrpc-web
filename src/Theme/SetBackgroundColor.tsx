import {useEffect} from 'react'
import {Mode} from '@mui/system/cssVars/useCurrentColorScheme'

const useBackgroundColor = (mode: Mode, lightColor: string, darkColor: string) => {
  useEffect(() => {
    console.log('useBackgroundColor', mode, lightColor, darkColor)
    const currentColor = mode === 'dark' ? darkColor : lightColor
    document.body.style.backgroundColor = currentColor
  }, [mode, lightColor, darkColor])
}

export default useBackgroundColor
