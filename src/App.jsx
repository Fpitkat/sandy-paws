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
      <Services />
      <Testimonials />
      <div className="team--box">
        <img className="section--heading" src="Images/MeetOurVets.png" alt="" />
        <div className="team--container">
          <Team
            img="/Images/Dr. Sands_head shot.JPEG"
            name="Dr. Michelle Sands"
            title="Owner Veterinarian"
          />
          <Team
            img="Images/DrDanaFrandsen.jpeg"
            name="Dr. Dana Frandsen"
            title="Associate Veterinarian"
          />
          <Team
            img="Images/Dr. Page_ head shot.JPG"
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
