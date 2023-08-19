import {createContext, useContext, useEffect, useState} from 'react'
import {TwitchUserData, getProfile} from '../navbar/components/pfp/pfpHelpers'

interface LoginContext {
  loggedIn: boolean
  profile: TwitchUserData | null
  setLoggedIn: (value: boolean) => void
}

const defaultContext: LoginContext = {
  loggedIn: false,
  profile: null,
  setLoggedIn: (value: boolean) => {},
}

const LoginContext = createContext<LoginContext>(defaultContext)

export const useLoginContext = () => {
  return useContext(LoginContext)
}

const LoginContextProvider = ({children}: {children: React.ReactNode}) => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [profile, setProfile] = useState<TwitchUserData | null>(null)

  useEffect(() => {
    // getProfile() must be done in here to wait for the dom to load
    setProfile(getProfile())
  }, [])

  useEffect(() => {
    //console.log('checking if logged in inside context', loggedIn)
  }, [loggedIn])

  return (
    <LoginContext.Provider value={{loggedIn, profile, setLoggedIn}}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider
