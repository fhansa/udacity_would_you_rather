
export default function Avatar(props) {
  return (
    <img className="avatar" src={props.user.avatarURL} alt={props.user.name}/>
  )
}