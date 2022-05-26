import { useState } from "react";
export default function Header() {
  const [selectedIndex, setSelectedIndex] = useState(2);
  const selections = ["HOME", "TEAM", "SERVICES", "TESTIMONIALS"];

  return (
    <header className="header container">
      <img
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
                {_selection}
              </li>
            );
          })}

          <li className="nav--item contact">CONTACT</li>
        </ul>
      </nav>
    </header>
  );
}
