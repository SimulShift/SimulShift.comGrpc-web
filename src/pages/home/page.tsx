import {Container, Typography} from '@mui/joy'
import {Dispatch, useEffect, useState} from 'react'
import {PingRequest, PongResponse} from '../../Protos/PingPong/PingPong_pb'
import TwitchPlayer from './TwitchPlayer'
import {RpcError, StatusCode} from 'grpc-web'
import {getEnumKey, getErrorCodeName} from '../../utils/EnumTools'
import {HelloUnaryInterceptor} from '../../Interceptors'
import {PingPongServicePromiseClient} from '../../Protos/PingPong/PingPong_grpc_web_pb'

/*
var client = new PingPongServiceClient('http://localhost:8080', null, {
  withCredentials: true,
  //unaryInterceptors: [new HelloUnaryInterceptor()],
})
*/

const client = new PingPongServicePromiseClient('http://localhost:8080', null, {
  withCredentials: true,
})

const ping = async (setPing: Dispatch<React.SetStateAction<boolean>>) => {
  const request = new PingRequest()
  try {
    const response = await client.ping(request)
    console.log('ping response', response.getOk())
    setPing(response.getOk())
  } catch (err: any) {
    console.log('error getting ping response:', getErrorCodeName(err.code))
    console.log(err)
  }
}

const Home = () => {
  const [pingTag, setPingTag] = useState<boolean>(false)
  useEffect(() => {
    ping(setPingTag)
  }, [])

  return (
    <Container maxWidth="md">
      <Typography>Twitch</Typography>
      <Typography>Ping: {pingTag ? 'Ponged' : 'Pinging...'}</Typography>
      {/* <TwitchPlayer /> */}
    </Container>
  )
}

export default Home
