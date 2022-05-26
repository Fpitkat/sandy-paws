import TypewriterComponent from "typewriter-effect";

export default function Hero() {
  return (
    <section className="hero--section">
      <div className="hero--text">
        <div className="hero--title">
          Welcome to Sandy Paws
          <span className="hero--type">
            <TypewriterComponent
              onInit={(typewriter) => {
                let typewriterMessages = [
                  "Animal Hospital",
                  "offers Wellness Exams",
                  "offers routine Vaccinations",
                  "offers Dental Cleanings",
                  "offers Diagnostic Services",
                  "offers Surgical Services",
                  "offers Cold Laser Therapy",
                  "Animal Hospital",
                ];

                typewriterMessages.forEach((message, messageIndex) => {
                  typewriter.typeString(message).pauseFor(1000);
                  if (messageIndex !== typewriterMessages.length - 1)
                    typewriter.deleteAll();
                });
                typewriter.start();
              }}
            />
          </span>
        </div>
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
