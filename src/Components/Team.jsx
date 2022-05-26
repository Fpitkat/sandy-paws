export default function Team({ img, name, title }) {
  return (
    <div className="team--cards">
      <img className="team--img" src={img} alt={name} />
      <p className="team--dr--name">{name}</p>
      <p className="team--dr-title">{title}</p>
    </div>
  );
}
