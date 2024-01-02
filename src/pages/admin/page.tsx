import TmiSwitch from './TmiSwitch'
import TmiStatus from './TmiStatus'
import {useEffect, useState} from 'react'
import {useLoginContext} from '../../auth/LoginContext'
import {getJoinedChannelsRpc, getTmiStatusRpc} from '../../services/twitch/TwitchBotAdminService'
import {List, ListItem, Typography} from '@mui/joy'

const Admin = () => {
  const loginContext = useLoginContext()
  const [tmiStatusStr, setTmiStatusStr] = useState<string>('...Loading')
  const [joinedChannels, setJoinedChannels] = useState<string[]>([])

  useEffect(() => {
    getTmiStatusRpc(setTmiStatusStr)
    getJoinedChannelsRpc(setJoinedChannels)
  }, [])

  return (
    <div>
      <h1>Admin</h1>
      {loginContext?.profile?.username.toLocaleLowerCase() === 'therealchadgpt' && (
        <>
          <TmiStatus status={tmiStatusStr} />
          <TmiSwitch status={tmiStatusStr} setTmiStatusStr={setTmiStatusStr} />
          <Typography level="h2">Joined Channels:</Typography>
          <List>
            {joinedChannels.map((channel, i) => (
              <ListItem key={channel}>
                {i + 1}. {channel}
              </ListItem>
            ))}
          </List>
        </>
      )}
    </div>
  )
}

export default Admin
