import {ChangeEvent, Dispatch, SetStateAction, useEffect, useState} from 'react'
import Switch from '@mui/joy/Switch'
import {styled} from '@mui/joy/styles'
import {
  ReadyState,
  StartTmiRequest,
  TmiStatusRequest,
  TmiStatusResponse,
} from '../../../Protos/TwitchBot/TwitchBot_pb'
import {TwitchBotAdminServiceClient} from '../../../Protos/TwitchBot/TwitchBotServiceClientPb'
import {getEnumKey} from '../../utils/EnumTools'

export const MuiSwitchLarge = styled(Switch)(({theme}) => ({
  width: 68,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      transform: 'translateX(30px)',
    },
  },
  '& .MuiSwitch-thumb': {
    width: 32,
    height: 32,
  },
  '& .MuiSwitch-track': {
    borderRadius: 20 / 2,
  },
}))

var client = new TwitchBotAdminServiceClient('http://localhost:8080', null, {
  withCredentials: true,
})

type tmiSwitchProps = {
  status: string
  setTmiStatusStr: Dispatch<SetStateAction<string>>
}

const tmiStatus = async (): Promise<ReadyState> => {
  return new Promise((resolve, reject) => {
    client.tmiStatus(
      new TmiStatusRequest(),
      {},
      (err: any, tmiStatusResponse: TmiStatusResponse) => {
        if (err) {
          reject(err)
        } else {
          resolve(tmiStatusResponse.getReadystate())
        }
      },
    )
  })
}

const TmiSwitch = ({status, setTmiStatusStr}: tmiSwitchProps) => {
  /*
  const handleChange = async (
    event: ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ): Promise<void> => {
    if (checked) {
      client.startTmi(new StartTmiRequest(), {}, (err, response) => {
        if (err) {
          console.log('error starting tmi', err)
        } else {
          console.log('tmi started', response)
        }
        setTmiStatusStr(getEnumKey(ReadyState, response.getReadystate()))
      })
    } else {
      client.stopTmi(new StartTmiRequest(), {}, (err, response) => {
        if (err) {
          console.log('error stopping tmi', err)
        } else {
          console.log('tmi stopped', response)
        }
        setTmiStatusStr(getEnumKey(ReadyState, response.getReadystate()))
      })
    }
  }
  */

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const checked = event.target.checked

    // This async IIFE (Immediately Invoked Function Expression)
    // allows you to handle asynchronous logic inside a synchronous event handler.
    ;(async () => {
      if (checked) {
        client.startTmi(new StartTmiRequest(), {}, (err, response) => {
          if (err) {
            console.log('error starting tmi', err)
          } else {
            console.log('tmi started', response)
          }
          setTmiStatusStr(getEnumKey(ReadyState, response.getReadystate()))
        })
      } else {
        client.stopTmi(new StartTmiRequest(), {}, (err, response) => {
          if (err) {
            console.log('error stopping tmi', err)
          } else {
            console.log('tmi stopped', response)
          }
          setTmiStatusStr(getEnumKey(ReadyState, response.getReadystate()))
        })
      }
    })() // Note the extra parentheses to invoke the function immediately
  }

  return (
    <MuiSwitchLarge size="md" sx={{m: 10}} checked={status === 'OPEN'} onChange={handleChange} />
  )
}

export default TmiSwitch
