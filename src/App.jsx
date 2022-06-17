import './App.css'

import Header from './Components/Header'
import Hero from './Components/Hero'
import Service from './Components/Service'
import Testimonials from './Components/Testimonials'
import Team from './Components/Team'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import RegisterPet from './Components/RegisterPet'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  function ServiceFactory(icon, title, description) {
    return {
      icon,
      title,
      description,
    }
  }

  const ServiceData = [
    ServiceFactory(
      './Images/Medical Doctor.png',
      'Wellness exams',
      'At Sandy Paws Animal Hospital we feel that a healthy pet is a happy pet! Our community has entrusted us with the care of their pets for almost 20 years. We are passionate about our work - and your pets - lifelong healthcare. '
    ),
    ServiceFactory(
      './Images/Catheter.png',
      'Vaccinations',
      'Sandy Paws Animal Hospital offers routine vaccines, which includes Canine Rabies, Distemper, Parvo, Leptospirosis and Bordetella. Also, feline Rabies, FVRCP, and Leukemia.'
    ),
    ServiceFactory(
      './Images/Toothache.png',
      'Dentistry',

      'Caring for your pet’s teeth and gums is about much more than simply controlling bad breath or enhancing their appearance. We offer routine cleanings with dental radiographs, and extractions if needed.'
    ),
    ServiceFactory(
      './Images/Stethoscope.png',
      'Diagnostics',

      'Sandy Paws Animal Hospital offers a wide range of in-house diagnostic services such as bloodwork, radiographs, ultrasound, ear & skin cytologies, biopsy’s, urinalysis, blood pressure and much more!'
    ),
    ServiceFactory(
      './Images/Clinic.png',
      'Surgery',
      'Sandy Paws Animal Hospital offers a wide range of surgical services for your pet such as spay, neuter, mass removal, cystotomy, orthopedic, and much more.'
    ),
    ServiceFactory(
      './Images/Laser Beam.png',
      'Cold laser therapy',
      'Cold laser therapy is a noninvasive procedure that uses light to stimulate cell regeneration and increase blood circulation. It helps with wounds, lameness, post surgical, IVDD, and much more.'
    ),
  ]

  function TestimonialFactory(img, star, name, location, testimonial) {
    return {
      img,
      star,
      name,
      location,
      testimonial,
    }
  }

  const TestimonialData = [
    TestimonialFactory(
      './Images/Ginger Guthrie.png',
      './Images/5-start.png',
      'Ginger G.',
      'Jacksonville, Florida',
      "I made an appointment at a different vet's office and ended up at this one by accident. I absolutely love the entire staff!"
    ),
    TestimonialFactory(
      './Images/Lynn Muller.png',
      './Images/5-start.png',
      'Lynn M.',
      'Jacksonville, Florida',
      'Very caring doctor and techs. We have had Royce treat him since we got him as a rescue dog 7 years ago.'
    ),
    TestimonialFactory(
      './Images/Michael Hickman.png',
      './Images/5-start.png',
      'Michael H.',
      'Jacksonville, Florida',
      'Awesome first visit!! Such friendly, helpful, knowledgeable staff. Very kind, informative, non pushy Doctors.. Very clean and organized facility. Highly recommend!'
    ),
  ]

  function TeamFactory(img, name, title) {
    return {
      img,
      name,
      title,
    }
  }

  const TeamData = [
    TeamFactory(
      '/Images/Dr. Sands_head shot.JPEG',
      'Dr. Michelle Sands',
      'Owner Veterinarian'
    ),
    TeamFactory(
      '/Images/DrDanaFrandsen.jpeg',
      'Dr. Dana Frandsen',
      'Associate Veterinarian'
    ),
    TeamFactory(
      '/Images/Dr. Page_ head shot.JPG',
      'Dr. Claire Page',
      'Associate Veterinarian'
    ),
  ]

  const IndexPage = () => {
    return (
      <div>
        <Hero />
        <div className='service--section'>
          <img
            id='services'
            className='section--heading'
            src='Images/PetServices.png'
            alt=''
          />

          <div className='service--container'>
            {ServiceData.map((service, i) => (
              <Service key={i} {...service} />
            ))}
          </div>
        </div>

        <div className='testimonial--box'>
          <img
            id='testimonials'
            className='section--heading'
            src='./Images/Testimonial--Header.png'
            alt=''
          />

          <div className='testimonial--container'>
            {TestimonialData.map((Testimonial, i) => (
              <Testimonials key={i} {...Testimonial} />
            ))}
          </div>
        </div>

        <div className='team--box'>
          <img
            id='team'
            className='section--heading'
            src='Images/MeetOurVets.png'
            alt=''
          />
          <div className='team--container'>
            {TeamData.map((team, i) => (
              <Team key={i} {...team} />
            ))}
          </div>
        </div>
        <Contact />
      </div>
    )
  }

  return (
    <Router>
      <div className='App container'>
        <Header />
        <Routes>
          <Route index element={<IndexPage />}></Route>
          <Route path='/test' element={<h1>test</h1>}></Route>
          <Route path='/register' element={<RegisterPet />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
