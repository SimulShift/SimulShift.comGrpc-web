import {CssVarsProvider, extendTheme} from '@mui/joy/styles'
import {keyframes} from '@emotion/react'
import {CssBaseline} from '@mui/joy'

const enterKeyframe = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }
  100% {
    transform: scale(1);
    opacity: 0.5;
  }
`

export default function ThemeRegistry({children}: {children: React.ReactNode}) {
  const theme = extendTheme({
    colorSchemes: {
      light: {
        palette: {
          mode: 'light',
          background: {
            backdrop: '#ffffff',
            body: '#5664bd',
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
            body: '#2c1c4d',
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
              animationName: `${enterKeyframe}`,
              animationDuration: '550ms',
              //animationTimingFunction: theme.transitions.easing.easeInOut,
            },
          }),
        },
      },
      JoySwitch: {
        styleOverrides: {
          track: {
            backgroundColor: '#a657f0',
            opacity: 0.3,
          },
        },
      },
    },
  })

  return (
    <CssVarsProvider defaultMode="dark" theme={theme}>
      <CssBaseline />
      {children}
    </CssVarsProvider>
  )
}
