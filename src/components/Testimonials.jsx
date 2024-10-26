import { useAOS } from "../hooks/useAOS";
import img1 from "/01.png";
import img2 from "/02.png";
import img3 from "/04.png";
import img4 from "/05.png";
import img5 from "/06.png";

const data = [img1, img2, img3, img4, img5];

function Testimonials() {
  useAOS();
  return (
    <div className="mb-5" data-aos="fade-up">
      <h1 className=" text-xl sm:text-2xl font-semibold pb-5 font-serif">
        You Need to Know
      </h1>
      <div className="flex overflow-auto">
        {data.map((d, idx) => (
          <img key={idx} className="w-48 sm:w-64" src={d} alt="testimonial" />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
