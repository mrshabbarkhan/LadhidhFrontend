import { useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { useBanners } from "../admin/page/banners/useBanners";

function OfferForYou() {
  const { banners, isPending } = useBanners();

  return (
    <section className="sm:mt-8 overflow-hidden">
      <h1 className="font-semibold text-xl py-2 sm:py-4">Offer for you</h1>
      {isPending ? (
        <Loader className={"h-40 w-full"} />
      ) : (
        <div className="offer_img h-36 md:h-40  flex  gap-x-10 mt-2 overflow-auto">
          {banners?.map((bner, index) => {
            return (
              <img key={index} className="max-w-80" src={bner.Img} alt={bner} />
            );
          })}
        </div>
      )}
    </section>
  );
}

export default OfferForYou;
