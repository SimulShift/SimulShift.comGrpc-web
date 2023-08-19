import {Container, Typography} from '@mui/joy'
import {PingRequest} from '../../../Protos/PingPong/PingPong_pb'
import {PingPongServiceClient} from '../../../Protos/PingPong/PingPongServiceClientPb'
import {useEffect, useState} from 'react'

var client = new PingPongServiceClient('http://localhost:8080', null, {
  withCredentials: true,
})

const Home = () => {
  const [ping, setPing] = useState<boolean>(false)

  useEffect(() => {
    const request = new PingRequest()
    request.setMessage('Ping broskies!!')
    client.ping(request, {}, (err, response) => {
      if (err) {
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