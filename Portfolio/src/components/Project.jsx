export default function Project(props) {
  return (
    <div className="project">
      <h2>{props.title}</h2>
      <img src={props.img} alt="Project"/>
      <a href={props.deploy}>Deployed Application</a>
      <a href={props.repo}>Github Repository</a>
    </div>
  )
}