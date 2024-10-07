import img1 from "../../public/01.png";
import img2 from "../../public/02.png";
import img3 from "../../public/04.png";
import img4 from "../../public/05.png";
import img5 from "../../public/06.png";

const data = [img1, img2, img3, img4, img5];

function Testimonials() {
  return (
    <div className="mb-5">
      <h1 className="text-2xl font-medium pb-5">Everything You Need to Know</h1>
      <div className="flex overflow-auto">
        {data.map((d, idx) => (
          <img key={idx} className="w-48 sm:w-64" src={d} alt="testimonial" />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
