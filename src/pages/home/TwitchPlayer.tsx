const TwitchPlayer = () => (
  <iframe
    src={`https://player.twitch.tv/?channel=simulshift&parent=${process.env.REACT_APP_PARENT_DOMAIN}&muted=true`}
    height="400"
    width="800"
    allowFullScreen></iframe>
)

export default TwitchPlayer
