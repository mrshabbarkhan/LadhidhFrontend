import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper/modules";
import { useBanners } from "../admin/page/banners/useBanners";
import Loader from "../../components/Loader";

function LandingPage() {
  const { banners, isPending } = useBanners();

  return (
    <section id="home" className="relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={"1000"}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {isPending ? (
          <Loader />
        ) : (
          banners.map((banner) => (
            <SwiperSlide key={banner._id}>
              <img
                className=" m-auto object-center object-cover h-36 sm:h-[50vh]"
                src={banner.Img}
                alt=""
              />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </section>
  );
}

export default LandingPage;
