import { useState } from "react";
import Form from "./Form";

export default function PetInfo() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  const [spayed, setSpayed] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");

  return (
    <section className="pet--info--section">
      <Form>
        <div className="pet--info">
          <p className="section---heading">
            <span className="first-word">Pet</span>
          </p>
          <div className="pet-name">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              className="input--box"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              required
            />
            <label className="left" htmlFor="breed">
              Breed:
            </label>
            <input
              id="breed"
              name="breed"
              className="input--box"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              type="text"
              required
            />
          </div>

          <div className="pet-species">
            <label>Species:</label>

            <select
              value={species}
              onChange={(e) => setSpecies(e.target.value)}
              className="input--box"
            >
              <option value="select">Select</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="bird">Bird</option>
              <option value="pocket">Pocket Pet</option>
              <option value="reptile">Reptile</option>
            </select>

            <label className="left">Gender:</label>

            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="input--box"
            >
              <option value="select">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="pet-weight">
            <label htmlFor="age">Age:</label>
            <input
              id="age"
              name="age"
              className="input--box"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              type="number"
            />
            <label className="left" htmlFor="dob">
              DOB:
            </label>
            <input
              id="dob"
              name="dob"
              className="input--box"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              type="date"
            />
          </div>
          <div className="pet-spay">
            <label>Spayed</label>

            <select
              value={spayed}
              onChange={(e) => setSpayed(e.target.value)}
              className="input--box"
            >
              <option value="select">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <label className="left" htmlFor="weight">
              Weight:
            </label>
            <input
              id="weight"
              className="input--box"
              name="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              type="number"
            />
          </div>
        </div>
      </Form>
    </section>
  );
}
