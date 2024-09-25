import landingImage from "../../../public/hero-5.jpeg"
import { useBanners } from "../admin/page/banners/useBanners";

function LandingPage() {

    return (
      <section className=" relative">
        <div className=" relative overflow-auto flex items-center justify-center">
          <img  className="h-[50vw] sm:h-[50vh] w-[60vw]" src={landingImage} alt="" />
        </div>
      </section>
    );
}

export default LandingPage
