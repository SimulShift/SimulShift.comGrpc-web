import {Container, Typography} from '@mui/joy'
import {useEffect, useState} from 'react'
import {PingPongServiceClient} from '../../Protos/PingPong/PingPongServiceClientPb'
import {PingRequest, PongResponse} from '../../Protos/PingPong/PingPong_pb'
import TwitchPlayer from './TwitchPlayer'
import {RpcError, StatusCode} from 'grpc-web'
import {getEnumKey, getErrorCodeName} from '../../utils/EnumTools'
import {HelloUnaryInterceptor} from '../../Interceptors'

var client = new PingPongServiceClient('http://localhost:8080', null, {
  withCredentials: true,
  unaryInterceptors: [new HelloUnaryInterceptor()],
})

const Home = () => {
  const [ping, setPing] = useState<boolean>(false)

  useEffect(() => {
    const request = new PingRequest()
    request.setMessage('Ping broskies!!')
    client.ping(request, {}, (err: RpcError, response: PongResponse) => {
      if (err) {
        // convert error code to enum key Status
        console.log('error getting ping response:', getErrorCodeName(err.code))
        console.log(err)
      } else {
        console.log('ping response', response.getOk())
        setPing(true)
      }
    })
  }, [])

  return (
    <Container maxWidth="md">
      <Typography>Twitch</Typography>
      <Typography>Ping: {ping ? 'Ponged' : 'Pinging...'}</Typography>
      {/* <TwitchPlayer /> */}
    </Container>
  )
}

export default Home
