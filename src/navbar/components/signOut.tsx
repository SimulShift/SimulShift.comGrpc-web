import {ButtonHTMLAttributes} from 'react'
import UrlBuilder, {AuthEndPoints} from '../../utils/UrlBuilder'
import {Button} from '@mui/joy'

const signOut = async () => {
  localStorage.setItem('lastVisitedPage', window.location.pathname)
  const url = new UrlBuilder().auth(AuthEndPoints.twitch).signout().build()

  const res = await fetch(url, {
    method: 'POST',
    credentials: 'include',
  })
  const data = await res.json()
  console.log('signout data', data)
  if (res.ok) {
    const lastVisitedPage = localStorage.getItem('lastVisitedPage')
    window.location.href = lastVisitedPage || '/'
  }
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string
}

const SignOutButton: React.FC<ButtonProps> = ({className}) => {
  return (
    <Button className={className} onClick={() => signOut()}>
      Sign out
    </Button>
  )
}
export default SignOutButton
