import landingImage from "../../../public/hero-6.png"
import { useBanners } from "../admin/page/banners/useBanners";

function LandingPage() {

    return (
      <section className=" relative">
        <div className=" relative overflow-auto flex items-center justify-center">
          <img  className="h-[40vw] sm:h-[50vh] " src={landingImage} alt="" />
        </div>
      </section>
    );
}

export default LandingPage
