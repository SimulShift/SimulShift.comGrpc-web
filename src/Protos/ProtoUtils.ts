import {Personality} from './TwitchBot/TwitchBot_pb'

export const mapPersonalityToString = (personality: Personality) => {
  switch (personality) {
    case Personality.UNKNOWN:
      return 'Unknown'
    case Personality.CHAD:
      return 'Chad'
    case Personality.HELPFUL:
      return 'Helpful'
    case Personality.SHY:
      return 'Shy'
    case Personality.UWU:
      return 'UwU'
    default:
      return 'Unknown'
  }
}
