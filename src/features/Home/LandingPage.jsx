import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import landingImage from "../../../public/03.png";
import { BiImageAdd } from "react-icons/bi";
import { useLocalStorage } from "../auth/LocalStorageContext";

function LandingPage() {

  const {user} = useLocalStorage()

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
    });
  }, [])

  return (
    <section className="relative">
      <div
        className="relative overflow-auto flex items-center justify-center "
        data-aos="fade-in" // AOS animation for the container
      >
        <img
          className="h-28 sm:h-[50vh] object-cover sm:object-fill object-center"
          src={landingImage}
          alt="Landing"
          data-aos="zoom-in" // AOS animation for the image
        />
      </div>
      {user?.isAdmin && (
        <span className="absolute right-0 top-0 text-2xl drop-shadow-md cursor-pointer">
          <input type="file" id="landingImage" className="hidden" />
          <label
            htmlFor="landingImage"
            className="custom-file-label relative group cursor-pointer"
          >
            <BiImageAdd/>
            <span className="tooltip-text absolute -bottom-12 right-10 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2">
              width- 900px, height- 250px
            </span>
          </label>
        </span>
      )}
    </section>
  );
}

export default LandingPage;
