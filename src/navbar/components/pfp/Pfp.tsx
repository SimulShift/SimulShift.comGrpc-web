import {useLoginContext} from '../../../auth/LoginContext'

type PfpProps = {
  width?: number
}

const Pfp = ({width}: PfpProps) => {
  const loginContext = useLoginContext()
  if (!loginContext?.profile?.image) return null

  return (
    <img
      src={loginContext.profile.image}
      alt="profile"
      width="0"
      height="0"
      sizes="100vw"
      style={{width: width, height: 'auto', borderRadius: '50%'}}
      placeholder="blur"
    />
  )
}

export default Pfp
