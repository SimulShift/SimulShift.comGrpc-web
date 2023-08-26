import {Container, Typography} from '@mui/joy'
import {useEffect, useState} from 'react'
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
  unaryInterceptors: [new HelloUnaryInterceptor<PingRequest, PongResponse>()],
  withCredentials: true,
})

const ping2 = async () => {
  const request = new PingRequest()
  try {
    const response = await client.ping(request)
    console.log('ping response', response.getOk())
  } catch (err: any) {
    console.log('error getting ping response:', getErrorCodeName(err.code))
    console.log(err)
  }
}

const Home = () => {
  const [ping, setPing] = useState<boolean>(false)

  useEffect(() => {
    ping2()
    /*
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
    */
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
