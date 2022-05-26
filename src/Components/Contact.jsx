export default function Contact() {
  return (
    <div className="contact-box">
      <div className="contact--form">
        <form>
          <label>
            Name:
            <input
              className="input--box"
              type="text"
              value=""
              placeholder="Name"
              onChange={() => console.log("Phone changed!")}
            />
          </label>

          <label>
            Email:
            <input
              className="input--box"
              type="email"
              value=""
              placeholder="Email"
              onChange={() => console.log("Phone changed!")}
            />
          </label>

          <label>
            Phone:
            <input
              className="input--box"
              type="phone"
              value=""
              placeholder="Phone"
              onChange={() => console.log("Phone changed!")}
            />
          </label>

          <label>
            Best way to reach you:
            <select>
              <option value="phone">Phone</option>
              <option value="Email">Email</option>
            </select>
          </label>

          <textarea placeholder="How can we help you?"></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div className="contact--map--section">
        <img
          className="contact--map"
          alt="map our location"
          src="./Images/map.png"
        />
      </div>
    </div>
  );
}
