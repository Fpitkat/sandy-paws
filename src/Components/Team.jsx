export default function Team(props) {
  return (
    <div className="team--cards">
      <img className="team--img" src={props.img} alt={props.name} />
      <p className="team--dr--name">{props.name}</p>
      <p className="team--dr-title">{props.title}</p>
    </div>
  );
}
