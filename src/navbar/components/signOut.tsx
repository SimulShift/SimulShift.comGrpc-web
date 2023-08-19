import {ButtonHTMLAttributes} from 'react'
import UrlBuilder, {AuthEndPoints} from '../../utils/UrlBuilder'

const signOut = async () => {
  const url = new UrlBuilder().auth(AuthEndPoints.twitch).signout().build()
  const res = await fetch(url, {
    method: 'POST',
    credentials: 'include',
  })
  const data = await res.json()
  console.log('signout data', data)
  if (res.ok) {
    window.location.href = '/'
  }
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string
}

const SignOutButton: React.FC<ButtonProps> = ({className}) => {
  return (
    <button className={className} onClick={() => signOut()}>
      Sign out
    </button>
  )
}
export default SignOutButton
