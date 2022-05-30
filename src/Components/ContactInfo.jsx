import { useState } from "react";

export default function ContactInfo() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  return (
    <section className="contact--info--section">
      <p>Pet Information</p>
      <form>
        <div className="contact--info">
          <div>
            <label htmlFor="first-name">First Name:</label>
            <input
              id="first-name"
              name="first-name"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
            />
            <label htmlFor="last-name">Last Name:</label>
            <input
              id="last-name"
              name="last-name"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
            />
          </div>

          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
            />
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="date"
            />
          </div>
        </div>
      </form>
    </section>
  );
}
