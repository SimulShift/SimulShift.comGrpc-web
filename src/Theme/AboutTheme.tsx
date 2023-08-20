import {CssVarsProvider, extendTheme} from '@mui/joy/styles'
import {CssBaseline} from '@mui/joy'

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
        background: {
          backdrop: '#ffffff',
          body: '#4d4940',
        },
        common: {
          black: '#000000',
          white: '#ffffff',
        },
        primary: {
          50: '#95a3ff',
          300: '#5664bd',
          700: '#313b7d',
        },
      },
    },
    dark: {
      palette: {
        mode: 'dark',
        background: {
          body: '#4d4940',
        },
        primary: {
          300: '#5664bd',
          400: '#3E4BA0',
          700: '#313b7d',
        },
      },
    },
  },

  components: {
    JoyListItemButton: {
      styleOverrides: {
        root: {
          fontWeight: 300,
        },
      },
    },
    JoyTypography: {
      styleOverrides: {
        root: {
          color: '#a657f0',
        },
      },
    },
    JoyButton: {
      styleOverrides: {
        root: ({theme}: any) => ({
          backgroundColor: '#5933a8',
          color: '#ffffff',
          borderRadius: 10,
          textTransform: 'none',
          fontWeight: 300,
          fontSize: '1.3rem',
          padding: '0.5rem 1rem',
          '&:hover': {
            backgroundColor: '#7348cc',
          },
          '& .MuiTouchRipple-child': {
            backgroundColor: 'black',
          },
          '& .MuiTouchRipple-rippleVisible': {
            opacity: 0.5,
            animationDuration: '550ms',
          },
        }),
      },
    },
    JoySwitch: {
      styleOverrides: {
        thumb: {
          // Controls default (unchecked) color for the thumb
          color: '#ccc',
        },
        track: {
          // Controls default (unchecked) color for the track
          opacity: 0.2,
          backgroundColor: '#fff',
          '.Mui-checked.Mui-checked + &': {
            // Controls checked color for the track
            opacity: 0.7,
            backgroundColor: '#5bfe9f',
          },
        },
      },
    },
  },
})

export default function AboutThemeRegistry({children}: {children: React.ReactNode}) {
  return (
    <CssVarsProvider defaultMode="dark" theme={theme}>
      <CssBaseline />
      {children}
    </CssVarsProvider>
  )
}
