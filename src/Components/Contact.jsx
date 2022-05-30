import { useState } from "react";

const GoogleMapView = () => (
  <div className="contact--map--section">
    <iframe
      title="map-view"
      className="contact--map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.8246960163715!2d-81.70788478441241!3d30.185001281831376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5c700c1e8d22d%3A0x1788d4530be1ec01!2sSandy%20Paws%20Animal%20Hospital!5e0!3m2!1sen!2sus!4v1653666951490!5m2!1sen!2sus"
      width="800"
      height="400"
      style={{ border: "0" }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
);

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  function nameChangeHandler(e) {
    setName(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    setName("");
    setEmail("");
    setPhone("");
    setText("");
    fetch("../../public/send_email.php", { name, email, phone, text }).then(
      (res) => {
        console.log(res);
      }
    );
    setFormSubmitted(true);
  }

  return (
    <div className="contact-section">
      <img
        className="section--heading"
        src="./Images/contact-section.png"
        alt=""
      />
      <div className="contact-box">
        <div className="contact--form">
          <form className="contact--home">
            <div className="contact--cells"></div>

            <div className="input--container">
              <label>Name:</label>
              <input
                name="name"
                className="input--box"
                type="text"
                value={name}
                placeholder="name"
                onChange={nameChangeHandler}
              />
            </div>

            <div className="input--container">
              <label>Email:</label>
              <input
                className="input--box"
                type="email"
                value={email}
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input--container">
              <label>Phone:</label>
              <input
                className="input--box"
                type="phone"
                value={phone}
                placeholder="phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <textarea
              placeholder="How can we help you?"
              onChange={(e) => setText(e.target.value)}
              value={text}
            ></textarea>

            <input
              id="btn--submit"
              type="submit"
              value="Submit"
              onClick={submitHandler}
            />
          </form>

          {/* <div className="contact--social">
            <img src="./Images/Facebook_white.png" alt="facebook" />
            <img src="./Images/Insta.png" alt="instagram" />
            <img src="./Images/Google_white.png" alt="google" />
            <img src="./Images/linkedin.png" alt="linkedin" />
          </div> */}

          {formSubmitted ? (
            <div className="thankyou">
              Thank you! We have received your request and will call you within
              48 hours.
            </div>
          ) : (
            <div className="thankyou"></div>
          )}
        </div>
        <GoogleMapView />
      </div>
    </div>
  );
}
