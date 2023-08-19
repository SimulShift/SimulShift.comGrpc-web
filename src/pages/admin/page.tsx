import TmiSwitch from './TmiSwitch'
import TmiStatus from './TmiStatus'
import {useEffect, useState} from 'react'
import {useLoginContext} from '../../auth/LoginContext'
import {TwitchBotAdminServiceClient} from '../../../Protos/TwitchBot/TwitchBotServiceClientPb'
import {getEnumKey} from '../../utils/EnumTools'
import {ReadyState, TmiStatusRequest} from '../../../Protos/TwitchBot/TwitchBot_pb'

//export const fetchCache = 'force-no-store'
//export const revalidate = 0 // seconds
//export const dynamic = 'force-dynamic'

var client = new TwitchBotAdminServiceClient('http://localhost:8080', null, {
  withCredentials: true,
})

const Admin = () => {
  const loginContext = useLoginContext()
  const [tmiStatusStr, setTmiStatusStr] = useState<string>('...Loading')

  useEffect(() => {
    const request = new TmiStatusRequest()
    client.tmiStatus(request, {}, (err, response) => {
      if (err) {
        console.log('error getting tmi status', err)
      } else {
        const readystate = getEnumKey(ReadyState, response.getReadystate())
        console.log('tmi status readystate', readystate, response.getMsg())
        setTmiStatusStr(readystate)
      }
    })
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
