import { useState } from "react";

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
      <p>Pet Information</p>
      <form>
        <div className="pet--info">
          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
            <label htmlFor="breed">Breed:</label>
            <input
              id="breed"
              name="breed"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              type="text"
            />
          </div>

          <div>
            <label>
              Pet Species:
              <select
                value={species}
                onChange={(e) => setSpecies(e.target.value)}
              >
                <option value="select">Select</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="bird">Bird</option>
                <option value="pocket">Pocket Pet</option>
                <option value="reptile">Reptile</option>
              </select>
            </label>
            <label>
              Gender:
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="select">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>
            <label>
              Neutered/Spayed
              <select
                value={spayed}
                onChange={(e) => setSpayed(e.target.value)}
              >
                <option value="select">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="weight">Weight:</label>
            <input
              id="weight"
              name="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              type="number"
            />
            <label htmlFor="age">Age:</label>
            <input
              id="age"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              type="number"
            />
            <label htmlFor="dob">DOB:</label>
            <input
              id="dob"
              name="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              type="date"
            />
          </div>
        </div>
      </form>
    </section>
  );
}
