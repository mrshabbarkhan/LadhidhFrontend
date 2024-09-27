import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import landingImage from "../../../public/03.png";

function LandingPage() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation occurs once
    });
  }, []);

  return (
    <section className="relative">
      <div
        className="relative overflow-auto flex items-center justify-center"
        data-aos="fade-in" // AOS animation for the container
      >
        <img
          className="h-[43vw] sm:h-[50vh]"
          src={landingImage}
          alt="Landing"
          data-aos="zoom-in" // AOS animation for the image
        />
      </div>
    </section>
  );
}

export default LandingPage;
