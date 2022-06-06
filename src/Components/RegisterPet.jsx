import AddInfo from "./AddInfo";
import ContactInfo from "./ContactInfo";
import PastVet from "./PastVet";
import PetInfo from "./PetInfo";

export default function RegisterPet() {
  return (
    <section className="Register-pet">
      <ContactInfo />
      <PetInfo />
      <PastVet />
      <AddInfo />
    </section>
  );
}
