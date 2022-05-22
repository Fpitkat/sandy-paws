import TypewriterComponent from "typewriter-effect";

export default function Hero() {
  return (
    <section className="hero--section">
      <div className="hero--text">
        <p className="hero--title">
          Welcome to Sandy Paws
          <span className="hero--type">
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter
                  .typeString("Animal Hospital")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("offers Wellness Exams")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("offers routine vaccines")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("offers dental cleanings")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("offers diagnostic services")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("offers surgical services")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("offers Cold laser therapy")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Animal Hospital")
                  .pauseFor(1000)
                  .start();
              }}
            />
          </span>
        </p>
        <p className="hero--content">
          Sandy Paws Animal Hospital is a full-service veterinary hospital that
          provides preventative, medical, surgical, dental, and hospitalized
          care for your pet.
        </p>
        <p className="btn hero--book">Book your Appointment</p>
      </div>
    </section>
  );
}
