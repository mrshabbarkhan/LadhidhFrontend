import { useEffect, useState } from "react";
import StarSvg from "../../assets/ui/StarSvg";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAddCart } from "../Cart/useAddCart";
import { TbTruckDelivery } from "react-icons/tb";
import { useSingleProduct } from "../admin/page/products/useSingleProduct";
import Loader from "../../components/Loader";
import { FaRegClock } from "react-icons/fa6";

function ProductDetails() {
  const [tempQty, setTempQty] = useState(1);
  const navigate = useNavigate();

  const { id } = useParams();

  const { product, isSuccess, singleProduct } = useSingleProduct();
  const { addToCart } = useAddCart();

  useEffect(() => {
    singleProduct(id);
  }, [id]);

  if (!isSuccess) {
    return <Loader className={"h-96"} />;
  }

  const { price, oldPrice, img } = product;

  async function handleCart() {
    const formData = {
      productId: product.id || product._id,
      quantity: tempQty,
    };

    addToCart(formData);
    navigate("/cart");
  }

  return (
    <>
      <div
        data-aos="fade-up"
        className="lg:mx-48 rounded-lg overflow-y-auto absolute top-12 left-0 right-0 object-cover pt-12 bg-gray-100 flex flex-col justfiy-center"
      >
        <img
          className="w-auto mx-auto h-[50vh] drop-shadow-2xl"
          src={img}
          alt="product-details"
        />

        <section className="mb-16 bg-white pt-2 px-2 reletive top-0 overflow-hidden ">
          <h1 className="font-semibold text-xl">
            {product.tittle || product.title}
          </h1>
          <p className="leading-5 mb-4">
            Experience the premium quality and tenderness of our Fresh Chicken
            Breast Fillets, perfect for your everyday cooking needs. Sourced
            from healthy, farm-raised chickens, these boneless fillets are 100%
            natural, antibiotic-free, and expertly cut to provide the best
            flavor and texture in every bite. Whether you're grilling, baking,
            or pan-frying, our chicken breast is versatile, lean, and packed
            with protein to keep your meals healthy and delicious.
          </p>
          <div className="flex items-center gap-3 font-semibold">
            <span className="flex items-center gap-1">
              <StarSvg /> 4.6
            </span>
            <span className="flex items-center border-x-2 px-2 gap-2">
              <FaRegClock className="text-primary" />6 - 7 min
            </span>
            <span className="flex items-center text-primary gap-1">
              <TbTruckDelivery className="text-lg" /> Free Delivery
            </span>
          </div>
          <p className="text-sm pt-4 ">Price</p>
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl text-primary font-bold">
                &#x20B9; {price}
              </h1>
              <span className="line-through text-gray-500 font-medium text-lg">
                {oldPrice}
              </span>
            </div>
            <div className="flex items-center">
              <span
                onClick={() => setTempQty(tempQty > 1 ? tempQty - 1 : tempQty)}
                className="bg-primary cursor-pointer text-white px-3 font-semibold text-lg rounded-lg"
              >
                -
              </span>
              <span className="text-lg font-semibold w-10 text-center">
                {tempQty}
              </span>
              <span
                onClick={() => setTempQty(tempQty + 1)}
                className="bg-primary cursor-pointer text-white px-2 font-semibold text-lg rounded-lg"
              >
                +
              </span>
            </div>
          </div>
        </section>
      </div>

      <div className="w-full bg-white text-center z-30 px-2  py-3 fixed bottom-0 left-0 cursor-pointer">
        <div
          onClick={() => handleCart()}
          className="z-30 bg-primary text-md font-semibold py-2 max-w-5xl rounded-xl m-auto text-white"
        >
          ADD TO CART
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
