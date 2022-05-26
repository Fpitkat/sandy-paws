export default function Testimonials({
  img,
  star,
  name,
  location,
  testimonial,
}) {
  return (
    <div className="Testimonial--card">
      <div className="testimonial-contact">
        <div>
          <img className="testimonial--img" src={img} alt="" />
        </div>
        <div>
          <p className="testimonial--name">{name}</p>
          <p className="testimonial--location">{location}</p>
          <img className="testimonial--star" src={star} alt="" />
        </div>
      </div>
      <div>
        <p className="testimonial--text">{testimonial}</p>
      </div>
      <img className="testimonial--google" src="./Images/Google.png" alt="" />
      <img className="testimonial--heart" src="./Images/heart.png" alt="" />
    </div>
  );
}
