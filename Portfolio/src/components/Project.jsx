export default function Project(props) {
  return (
    <div className="project container">
      <h4>{props.title}</h4>
      <>{props.img}</>
      <p><a href={props.deploy}>Deployed Application</a></p>
      <p><a href={props.repo}>Github Repository</a></p>
    </div>
  )
}