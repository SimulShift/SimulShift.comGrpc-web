import {createContext, useContext, useEffect, useState} from 'react'
import {cookieToJson, getCookie} from '../utils/Cookie'

export type TwitchUserData = {
  id: string
  login: string
  username: string
  image: string
  createdAt: string
}

/**
 * Get the twitch user data from the cookie
 * @returns {TwitchUserData}
 */
export const getProfile = (): TwitchUserData | null => {
  try {
    const cookie = getCookie('userData')
    if (!cookie) {
      console.log('No cookie found in getProfile')
      return null
    }
    return cookieToJson(cookie)
  } catch (e) {
    console.error('Error getting profile', e)
    return null
  }
}

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

const loginText = createContext<LoginContext>(defaultContext)

export const useLoginContext = () => {
  return useContext(loginText)
}

const LoginContextProvider = ({children}: {children: React.ReactNode}) => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [profile, setProfile] = useState<TwitchUserData | null>(null)

  useEffect(() => {
    // getProfile() must be done in here to wait for the dom to load
    setProfile(getProfile())
    console.log('checking profile info', getProfile())
  }, [])

  useEffect(() => {
    //console.log('checking if logged in inside context', loggedIn)
  }, [loggedIn])

  return (
    <loginText.Provider value={{loggedIn, profile, setLoggedIn}}>{children}</loginText.Provider>
  )
}

export default LoginContextProvider
