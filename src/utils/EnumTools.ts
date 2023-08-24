import {StatusCode} from 'grpc-web'

export const getEnumKey = (myEnum: any, enumValue: any): string =>
  Object.keys(myEnum).find(x => myEnum[x] === enumValue) || 'Enum value not found'

export const getErrorCodeName = (code: StatusCode): string => {
  return getEnumKey(StatusCode, code)
}
