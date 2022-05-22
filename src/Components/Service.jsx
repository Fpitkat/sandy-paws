export default function Service(props) {
  return (
    <div className="service--card">
      <img className="service--icon" src={props.icon} alt="" />
      <p className="service--title">{props.title}</p>
      <p className="service--description">{props.description}</p>
    </div>
  );
}
