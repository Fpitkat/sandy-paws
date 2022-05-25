import "./App.css";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Services from "./Components/Service";
import Testimonials from "./Components/Testimonials";
import Team from "./Components/Team";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="service--section">
        <img className="section--heading" src="Images/PetServices.png" alt="" />

        <div className="service--container">
          <Services
            icon="./Images/Medical Doctor.png"
            title="Wellness exams"
            description="At Sandy Paws Animal Hospital we feel that a healthy pet is a happy pet! Our community has entrusted us with the care of their pets for almost 20 years. We are passionate about our work - and your pets - lifelong healthcare. "
          />
          <Services
            icon="./Images/Catheter.png"
            title="Vaccinations"
            description="Sandy Paws Animal Hospital offers routine vaccines, which includes Canine Rabies, Distemper, Parvo, Leptospirosis and Bordetella. Also, feline Rabies, FVRCP, and Leukemia."
          />
          <Services
            icon="./Images/Toothache.png"
            title="Dentistry"
            description="Caring for your pet’s teeth and gums is about much more than simply controlling bad breath or enhancing their appearance. We offer routine cleanings with dental radiographs, and extractions if needed."
          />
          <Services
            icon="./Images/Stethoscope.png"
            title="Diagnostics"
            description="Sandy Paws Animal Hospital offers a wide range of in-house diagnostic services such as bloodwork, radiographs, ultrasound, ear & skin cytologies, biopsy’s, urinalysis, blood pressure and much more!"
          />
          <Services
            icon="./Images/Clinic.png"
            title="Surgery"
            description="Sandy Paws Animal Hospital offers a wide range of surgical services for your pet such as spay, neuter, mass removal, cystotomy, orthopedic, and much more."
          />
          <Services
            icon="./Images/Laser Beam.png"
            title="Cold laser therapy"
            description="Cold laser therapy is a noninvasive procedure that uses light to stimulate cell regeneration and increase blood circulation. It helps with wounds, lameness, post surgical, IVDD, and much more. "
          />
        </div>
      </div>

      <div className="testimonial--box">
        <img
          className="section--heading"
          src="./Images/Testimonial--Header.png"
          alt=""
        />

        <div className="testimonial--container">
          <Testimonials
            img="./Images/Ginger Guthrie.png"
            star="./Images/5-start.png"
            name="Ginger G"
            location="Jacksonville, Florida"
            testimonial="I made an appointment at a different vet's office and ended up at this one by accident. I absolutely love the entire staff!"
          />
          <Testimonials
            img="./Images/Lynn Muller.png"
            star="./Images/5-start.png"
            name="Lynn M"
            location="Jacksonville, Florida"
            testimonial="Very caring doctor and techs. We have had Royce treat him since we got him as a rescue dog 7 years ago."
          />
          <Testimonials
            img="./Images/Michael Hickman.png"
            star="./Images/5-start.png"
            name="Michael H"
            location="Jacksonville, Florida"
            testimonial="Awesome first visit!! Such friendly, helpful, knowledgeable staff. Very kind, informative, non pushy Doctors.. Very clean and organized facility. Highly recommend!"
          />
        </div>
      </div>

      <div className="team--box">
        <img className="section--heading" src="Images/MeetOurVets.png" alt="" />
        <div className="team--container">
          <Team
            img="/Images/Dr. Sands_head shot.JPEG"
            name="Dr. Michelle Sands"
            title="Owner Veterinarian"
          />
          <Team
            img="/Images/DrDanaFrandsen.jpeg"
            name="Dr. Dana Frandsen"
            title="Associate Veterinarian"
          />
          <Team
            img="/Images/Dr. Page_ head shot.JPG"
            name="Dr. Claire Page"
            title="Associate Veterinarian"
          />
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
