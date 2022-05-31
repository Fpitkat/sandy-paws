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

  return (
    <section className="add--info--section">
      <p>Pet Information</p>
      <div className="add--info">
        <p>Additional Information</p>
        <div>
          <div>
            <label>
              Friendly
              <input
                type="checkbox"
                value={isfriend}
                onChange={(e) => setIsfriend(e.target.value)}
              />
            </label>
            <label>
              Will bite or scratch when picked up
              <input
                type="checkbox"
                value={willbite}
                onChange={(e) => setWillBite(e.target.value)}
              />
            </label>
            <label>
              Hides when around strangers
              <input
                type="checkbox"
                value={hides}
                onChange={(e) => setHides(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Requires an extra pair of hands at the vet's office
              <input
                type="checkbox"
                value={extrahands}
                onChange={(e) => setExtraHands(e.target.value)}
              />
            </label>
            <label>
              May need sedation
              <input
                type="checkbox"
                value={sedation}
                onChange={(e) => setSedation(e.target.value)}
              />
            </label>
            <label>
              Needs a muzzle
              <input
                type="checkbox"
                value={muzzle}
                onChange={(e) => setMuzzle(e.target.value)}
              />
            </label>
          </div>
        </div>
        <div>
          <p>
            Please feel free to share any other additional information about
            your pet
            <textarea
              onChange={(e) => setTextAdd(e.target.value)}
              value={textAdd}
            ></textarea>
          </p>
        </div>
        <div>
          <p>Please upload an up-to-date photo of your pet if available</p>
          <input
            value={uploadphoto}
            type="file"
            onChange={(e) => setUploadPhoto(e.target.value)}
          />
        </div>
        <div>
          <p>
            Reason for Visit
            <textarea
              onChange={(e) => setVisitReason(e.target.value)}
              value={visitreason}
            ></textarea>
          </p>
        </div>
        <div>
          <p>Referred by:</p>
          <select
            value={referred}
            onChange={(e) => setReferred(e.target.value)}
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
    </section>
  );
}
