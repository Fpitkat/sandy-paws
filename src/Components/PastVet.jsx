import { useState } from "react";

export default function PetVet() {
  const [text, setText] = useState("");
  const [permission, setPermission] = useState("");
  const [file, setFile] = useState("");

  return (
    <section className="past--vet--section">
      <div className="past--vet">
        <p className="section---heading">
          <span className="first-word">Past Veterinary</span> Details
        </p>
        <div>
          <p>
            Past Veterinary Clinics and/or Doctors (if none, please indicate
            N/A)
          </p>
          <textarea
            onChange={(e) => setText(e.target.value)}
            value={text}
          ></textarea>
        </div>
        <div>
          <p>
            Do we have permission to request a copy of your pet's medical
            history?
          </p>
          <select
            value={permission}
            onChange={(e) => setPermission(e.target.value)}
            id="dropDown"
          >
            <option value="select">Select</option>
            <option value="Yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <p>Pet Records (if available please upload them here)</p>
          <input
            type="file"
            name="file"
            value={file}
            onChange={(e) => setFile(e.target.value)}
          />
        </div>
      </div>
    </section>
  );
}
