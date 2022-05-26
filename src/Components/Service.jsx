// const ExampleService = ({ icon, title, description }) => {
//   return <Services icon={icon} title={title} description={description} />;
// };
export default function Service({ icon, title, description }) {
  return (
    <div className="service--card">
      <img className="service--icon" src={icon} alt="" />
      <p className="service--title">{title}</p>
      <p className="service--description">{description}</p>
    </div>
  );
}
