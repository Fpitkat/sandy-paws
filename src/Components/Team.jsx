export default function Team({ img, name, title }) {
  return (
    <section className="team--cards" id="team">
      <img className="team--img" src={img} alt={name} />
      <p className="team--dr--name">{name}</p>
      <p className="team--dr-title">{title}</p>
    </section>
  );
}
