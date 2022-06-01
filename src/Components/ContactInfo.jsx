import { useState } from "react";

export default function ContactInfo() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  return (
    <section className="contact--info--section">
      <div className="contact--info">
        <p className="section---heading">
          <span className="first-word">Client</span>
        </p>
        <div className="three--cols">
          <div>
            <label htmlFor="first-name">First:</label>
            <input
              placeholder="First Name"
              id="first-name"
              className="input--box"
              name="first-name"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              required
            />

            <label className="left" htmlFor="last-name">
              Last:
            </label>
            <input
              placeholder="Last Name"
              id="last-name"
              className="input--box"
              name="last-name"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              required
            />
          </div>

          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              placeholder="Phone Number"
              id="phone"
              name="phone"
              className="input--box"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              required
            />

            <label className="left" htmlFor="email">
              Email:
            </label>
            <input
              placeholder="email"
              id="email"
              className="input--box"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            />
          </div>

          <div>
            <label htmlFor="address">Address:</label>
            <input
              placeholder="Address"
              id="address"
              className="input--box"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="address"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
