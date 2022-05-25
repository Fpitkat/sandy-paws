export default function Testimonials(props) {
  return (
    <div className="Testimonial--card">
      <div className="testimonial-contact">
        <div>
          <img className="testimonial--img" src={props.img} alt="" />
        </div>
        <div>
          <img className="testimonial--star" src={props.star} alt="" />
          <p className="testimonial--name">{props.name}</p>
          <p className="testimonial--location">{props.location}</p>
        </div>
      </div>

      <div>
        <p className="testimonial--text">{props.testimonial}</p>
      </div>
      <img className="testimonial--google" src="./Images/Google.png" alt="" />
      <img className="testimonial--heart" src="./Images/heart.png" alt="" />
    </div>
  );
}
