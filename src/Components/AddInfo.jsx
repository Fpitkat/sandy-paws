import { useState } from "react";

export default function AddInfo() {
  const [textAdd, setTextAdd] = useState("");
  const [uploadphoto, setUploadPhoto] = useState("");
  const [visitreason, setVisitReason] = useState("");
  const [referred, setReferred] = useState("");
  const [isfriend, setIsfriend] = useState("");
  const [willbite, setWillBite] = useState("");
  const [hides, setHides] = useState("");
  const [extrahands, setExtraHands] = useState("");
  const [sedation, setSedation] = useState("");
  const [muzzle, setMuzzle] = useState("");
  const [aggressive, setIsAggressive] = useState("");

  return (
    <section className="add--info--section">
      <div className="add--info">
        <p className="section---heading">
          <span className="first-word">Additional</span> Details
        </p>
        <p className="question">Mood</p>
        <div className="two--cols">
          <div>
            <label>
              <input
                type="checkbox"
                value={isfriend}
                onChange={(e) => setIsfriend(e.target.value)}
              />
              Friendly
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                value={willbite}
                onChange={(e) => setWillBite(e.target.value)}
              />
              Will bite or scratch when picked up
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                value={hides}
                onChange={(e) => setHides(e.target.value)}
              />
              Hides when around strangers
            </label>
            <br />
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                value={aggressive}
                onChange={(e) => setIsAggressive(e.target.value)}
              />
              Anxious/Aggressive
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                value={extrahands}
                onChange={(e) => setExtraHands(e.target.value)}
              />
              Requires an extra pair of hands at the vet's office
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                value={sedation}
                onChange={(e) => setSedation(e.target.value)}
              />
              May need sedation
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                value={muzzle}
                onChange={(e) => setMuzzle(e.target.value)}
              />
              Needs a muzzle
            </label>
          </div>
        </div>
        <div>
          <p className="question">
            Please feel free to share any other additional information about
            your pet
            <textarea
              onChange={(e) => setTextAdd(e.target.value)}
              value={textAdd}
            ></textarea>
          </p>
        </div>
        <div>
          <p className="question">
            Please upload an up-to-date photo of your pet if available
          </p>
          <input
            className="file--upload"
            value={uploadphoto}
            type="file"
            onChange={(e) => setUploadPhoto(e.target.value)}
          />
        </div>
        <div>
          <p className="question">
            Reason for Visit
            <textarea
              onChange={(e) => setVisitReason(e.target.value)}
              value={visitreason}
              required
            ></textarea>
          </p>
        </div>
        <div>
          <p className="question">Referred by:</p>
          <select
            id="dropDown"
            value={referred}
            onChange={(e) => setReferred(e.target.value)}
            required
          >
            <option value="select">Select</option>
            <option value="internet">Internet Search</option>
            <option value="google">Google</option>
            <option value="facebook">Facebook</option>
            <option value="instagram">Instagram</option>
            <option value="yelp">Yelp</option>
            <option value="nextdoor">Nextdoor</option>
            <option value="mobile-groomer">Mobile Groomer</option>
            <option value="referred-by-friend">Referred by friend</option>
            <option value="past-client">Previous Client</option>
          </select>
        </div>
      </div>
      <div className="Register--btn">
        <p className="btn hero--book">New Pet</p>
        <p className="btn hero--book">Submit</p>
      </div>
    </section>
  );
}
