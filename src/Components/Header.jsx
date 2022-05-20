export default function Header() {
  return (
    <header className="header container">
      <img
        className="header--logo"
        src="/Images/logo.png"
        alt="sandy paws logo"
      ></img>
      <nav className="nav--container container">
        <ul>
          <li className="nav--item">HOME</li>
          <li className="nav--item">TEAM</li>
          <li className="nav--item">SERVICES</li>
          <li className="nav--item">TESTIMONIALS</li>
          <li className="nav--item contact">CONTACT</li>
        </ul>
      </nav>
    </header>
  );
}
