import TmiSwitch from './TmiSwitch'
import TmiStatus from './TmiStatus'
import {useEffect, useState} from 'react'
import {useLoginContext} from '../../auth/LoginContext'
import {getTmiStatusRpc} from '../../services/TwitchServices'

const Admin = () => {
  const loginContext = useLoginContext()
  const [tmiStatusStr, setTmiStatusStr] = useState<string>('...Loading')

  useEffect(() => {
    getTmiStatusRpc(setTmiStatusStr)
  }, [])

  return (
    <div>
      <h1>Admin</h1>
      {loginContext?.profile?.displayName.toLocaleLowerCase() === 'therealchadgpt' && (
        <>
          <TmiStatus status={tmiStatusStr} />
          <TmiSwitch status={tmiStatusStr} setTmiStatusStr={setTmiStatusStr} />
        </>
      )}
    </div>
  )
}

export default Admin
