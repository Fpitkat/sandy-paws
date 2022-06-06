import { useState } from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [selectedIndex, setSelectedIndex] = useState(2);
  const selections = ["HOME", "TEAM", "SERVICES", "TESTIMONIALS"];
  let navigate = useNavigate();

  return (
    <header className="header container" id="home">
      <img
        onClick={() => navigate("/#home")}
        className="header--logo"
        src="/Images/logo.png"
        alt="sandy paws logo"
      ></img>

      <nav className="nav--container container sticky">
        <ul>
          {selections.map((_selection, i) => {
            return (
              <li
                key={i}
                onClick={() => setSelectedIndex(i)}
                className={`nav--item btn--nav ${
                  i === selectedIndex ? "nav--selected" : ""
                }`}
              >
                <Link to={`/#${_selection.toLowerCase()}`}>{_selection}</Link>
              </li>
            );
          })}

          <Link to="/#contact">
            <li className="nav--item contact">CONTACT</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
