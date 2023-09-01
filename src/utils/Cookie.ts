/**
 * Gets the cookie with the given name
 * @param {string} name - The name of the cookie to get
 * @returns {string} The cookie string in the format string=jsonString
 */
export const getCookie = (name: string): string | null | undefined => {
  if (typeof window === 'undefined') {
    console.log('Not in a browser environment, returning null')
    return null
  }
  let cookies
  try {
    console.log(document.cookie)
    cookies = decodeURIComponent(document.cookie)
  } catch {
    console.log('error decoding cookie')
    return null
  }
  const cookieVal = cookies.split('; ').find(row => row.startsWith(name))
  if (!cookieVal) console.log(`No cookie named ${name} found, not logged in`)
  return cookieVal
}

/**
 * Converts a cookie string to a json object
 * Cookie is in the format string=jsonString
 * @param {string} cookie - The cookie string to convert
 */
export const cookieToJson = (cookie: string) => {
  const json = JSON.parse(cookie?.split('=')[1] || '{}')
  //console.log('cookie json', json)
  if (!json) throw new Error('No json found in cookie')
  return json
}

export const getUserData = () => {
  const cookie = getCookie('userData')
  if (!cookie) return null
  const json = cookieToJson(cookie)
  return json
}
