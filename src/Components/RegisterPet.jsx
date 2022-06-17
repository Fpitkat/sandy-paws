import AddInfo from './AddInfo'
import ContactInfo from './ContactInfo'
import PastVet from './PastVet'
import PetInfo from './PetInfo'
import Form from './Form'
import { useState } from 'react'

export default function RegisterPet() {
  const [pets, setPets] = useState([{ id: 0 }])
  const [currentPet, setCurrentPet] = useState(0)
  return (
    <section className='Register-pet'>
      <Form name='register-pet' method='POST' netlify>
        <ContactInfo />
        {pets.map((pet) => {
          return (
            <>
              <PetInfo pet={pet} />
              <PastVet pet={pet} />
              <AddInfo pet={pet} pets={pets} setPets={setPets} />
            </>
          )
        })}
      </Form>
    </section>
  )
}
