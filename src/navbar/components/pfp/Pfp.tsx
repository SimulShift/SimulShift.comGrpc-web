import {useLoginContext} from '../../../auth/LoginContext'
import {getProfile} from './pfpHelpers'

type PfpProps = {
  width?: number
}

const Pfp = ({width}: PfpProps) => {
  const loginContext = useLoginContext()
  console.log('loginContext', loginContext)
  if (!loginContext?.profile?.image) return null
  console.log('Getting image porofile', loginContext.profile.image)

  return (
    <img
      src={loginContext.profile.image}
      alt="profile"
      width="0"
      height="0"
      sizes="100vw"
      style={{width: width, height: 'auto'}}
      placeholder="blur"
      className="rounded-full"
    />
  )
}

export default Pfp
