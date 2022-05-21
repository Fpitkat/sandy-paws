export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer--hours">
        <p className="footer--hours--title">Business hours</p>
        <div className="footer--hours--schedule">
          <div className="footer--hours--days">
            <ul>
              <li>Monday:</li>
              <li>Tuesday:</li>
              <li>Wednesday:</li>
              <li>Thursday:</li>
              <li>Friday:</li>
              <li>Saturday:</li>
              <li>Sunday:</li>
            </ul>
          </div>
          <div className="footer--hours--times">
            <ul>
              <li>8:00am - 6:30pm</li>
              <li>8:00am - 6:30pm</li>
              <li>8:00am - 6:30pm</li>
              <li>8:00am - 6:30pm</li>
              <li>8:00am - 6:30pm</li>
              <li>8:00am - 2:00pm</li>
              <li>Closed</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer--location">
        <p className="footer--location--title">Location</p>
        <p>550 Wells Road</p>
        <p>Suite 17</p>
        <p>Orange Park, FL 32073</p>
      </div>
      <div className="footer--menu">
        <p className="footer--menu--title">Menu</p>
        <nav className="nav--footer container">
          <ul>
            <li>Home</li>
            <li>Team</li>
            <li>Services</li>
            <li>Testimonials</li>
          </ul>
        </nav>
      </div>
      <div className="footer--contact">
        <p className="footer--contact--title">Contact</p>
        <ul className="nav--footer">
          <li className="nav--item">Contact</li>
          <li className="nav--item">Book Appointment</li>
          <li className="nav--item">Register your pet</li>
        </ul>
        <img
          className="footer--logo"
          src="/Images/logo.png"
          alt="sandy paws logo"
        ></img>
        <div className="footer--social">
          <img
            className="socail-icon"
            src="/Images/Facebook_white.png"
            alt="facebook"
          />
          <img
            className="socail-icon"
            src="/Images/Insta.png"
            alt="instagram"
          />
          <img
            className="socail-icon"
            src="/Images/Google_white.png"
            alt="google"
          />
          <img
            className="socail-icon"
            src="/Images/linkedin.png"
            alt="linkedin"
          />
        </div>
      </div>
    </footer>
  );
}
