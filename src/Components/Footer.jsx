import { HashLink as Link } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  let navigate = useNavigate();
  const MySocialIcon = (props) => (
    <img className="socail-icon" src={`/Images/${props.src}`} alt={props.alt} />
  );

  const Weekdays = () => (
    <ul>
      <li>Monday:</li>
      <li>Tuesday:</li>
      <li>Wednesday:</li>
      <li>Thursday:</li>
      <li>Friday:</li>
      <li>Saturday:</li>
      <li>Sunday:</li>
    </ul>
  );

  const Hours = () => (
    <ul>
      <li>8:00am - 6:30pm</li>
      <li>8:00am - 6:30pm</li>
      <li>8:00am - 6:30pm</li>
      <li>8:00am - 6:30pm</li>
      <li>8:00am - 6:30pm</li>
      <li>8:00am - 2:00pm</li>
      <li>Closed</li>
    </ul>
  );

  const FootNav = () => (
    <ul>
      <Link to="/#home">
        <li>Home</li>
      </Link>

      <Link to="/#team">
        <li>Team</li>
      </Link>

      <Link to="/#services">
        <li>Services</li>
      </Link>

      <Link to="/#testimonials">
        <li>Testimonials</li>
      </Link>
    </ul>
  );

  const FooterContact = () => (
    <ul className="nav--footer">
      <li className="nav--item">
        <Link to="/#contact">Contact</Link>
      </li>
      <Link to="/register#home">
        <li className="nav--item">Book Appointment</li>
      </Link>
    </ul>
  );

  return (
    <footer className="footer">
      <div className="footer--hours">
        <p className="footer--hours--title">Business hours</p>
        <div className="footer--hours--schedule">
          <div className="footer--hours--days">
            <Weekdays />
          </div>
          <div className="footer--hours--times">
            <Hours />
          </div>
        </div>
      </div>
      <div className="footer--location">
        <p className="footer--location--title">Location</p>
        <p>550 Wells Road</p>
        <p>Suite 17</p>
        <p>Orange Park, FL 32073</p>
        <p>(904) 278-0600</p>
      </div>

      <div className="footer--menu">
        <p className="footer--menu--title">Menu</p>
        <nav className="nav--footer container">
          <FootNav />
        </nav>
      </div>
      <div className="footer--contact">
        <p className="footer--contact--title">Contact</p>
        <FooterContact />
        <Link to="/#home">
          <img
            className="footer--logo"
            src="/Images/logo.png"
            alt="sandy paws logo"
          ></img>
        </Link>
        <div className="footer--social">
          <MySocialIcon src="Facebook_white.png" alt="facebook" />
          <MySocialIcon src="Insta.png" alt="instagram" />
          <MySocialIcon src="Google_white.png" alt="google" />
          <MySocialIcon src="linkedin.png" alt="linkedin" />
        </div>
      </div>
    </footer>
  );
}
