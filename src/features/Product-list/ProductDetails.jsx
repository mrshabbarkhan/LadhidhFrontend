import { Suspense, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAddCart } from "../Cart/useAddCart";
import { TbTruckDelivery } from "react-icons/tb";
import { useSingleProduct } from "../admin/page/products/useSingleProduct";
import Loader from "../../components/Loader";
import YouMight from "../../components/YouMight";
import OutOfStock from "../../components/OutOfStock";
import { useSettings } from "../admin/page/settings/useSettings";
import { GiSpoon } from "react-icons/gi";
import { motion } from "framer-motion";

function ProductDetails() {
  const [tempQty, setTempQty] = useState(1);
  const [readMore, setReadMore] = useState(false);
  const { settings } = useSettings();

  const navigate = useNavigate();

  const { id } = useParams();

  const { product, isSuccess, singleProduct } = useSingleProduct();
  const { addToCart } = useAddCart();

  useEffect(() => {
    singleProduct(id);
  }, [id, singleProduct]);

  if (!isSuccess) {
    return <Loader className={"h-96"} />;
  }

  const { price, discount, img, description } = product;

  const oldPrice = Math.floor(price / (1 - discount / 100));

  async function handleCart() {
    const formData = {
      productId: product.id || product._id,
      quantity: tempQty,
    };

    addToCart(formData);
    navigate("/cart");
  }

  return (
    <section className="">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "linear" }}
        className="rounded-lg flex flex-col lg:flex-row items-center  justify-between gap-10 mb-10 bg-red-100 px-0 sm:p-6"
      >
        {/* Image Section */}
        <div className="lg:w-1/3">
          <Suspense fallback={<h1>Loading...</h1>}>
            <img
              className="w-full rounded-md h-auto drop-shadow-2xl object-cover"
              src={img}
              alt="product-details"
            />
          </Suspense>
        </div>

        {/* Text Section */}
        <section className="lg:w-1/2 bg-white p-4 rounded-lg shadow-lg">
          <h1 className="font-semibold text-xl">
            {product.tittle || product.title}
          </h1>
          <button className="flex border px-3 rounded-md bg-gray-50 gap-2 items-center mb-4 mt-2">
            <GiSpoon /> {product?.quantity}
          </button>
          <p
            className={`leading-6 ${readMore || "line-clamp-4"}`}
            style={{ whiteSpace: "pre-wrap" }}
          >
            {description ||
              "Experience the premium quality and tenderness of our Fresh Chicken Breast Fillets, perfect for your everyday cooking needs. Sourced from healthy, farm-raised chickens, these boneless fillets are 100% natural, antibiotic-free, and expertly cut to provide the best flavor and texture in every bite. Whether you're grilling, baking, or pan-frying, our chicken breast is versatile, lean, and packed with protein to keep your meals healthy and delicious."}
          </p>

          <button
            onClick={() => setReadMore(!readMore)}
            className="mb-4 font-semibold text-sm border bg-gray-50 rounded-md px-2"
          >
            {readMore ? "Read less..." : "Read more..."}
          </button>

          <div className="flex items-center gap-3 font-semibold mb-4">
            <span className="flex items-center text-primary gap-1">
              <TbTruckDelivery className="text-lg" />{" "}
              {price > settings?.freeDeliveryOrderValue
                ? "Free Delivery"
                : `₹ ${settings?.deliveryCharge}`}
            </span>
          </div>

          <p className="text-sm pt-4">Price</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl text-primary font-bold">
                &#x20B9; {price}
              </h1>
              <span className="line-through text-gray-500 font-medium text-lg">
                &#8377; {oldPrice}
              </span>
            </div>

            <div className="flex items-center">
              <span
                onClick={() => setTempQty(tempQty > 1 ? tempQty - 1 : tempQty)}
                className="bg-primary cursor-pointer text-white px-3 font-semibold text-lg rounded-lg hover:scale-95"
              >
                -
              </span>
              <span className="text-lg font-semibold w-10 text-center">
                {tempQty}
              </span>
              <span
                onClick={() => setTempQty(tempQty + 1)}
                className="bg-primary cursor-pointer text-white px-2 font-semibold text-lg rounded-lg hover:scale-95"
              >
                +
              </span>
            </div>
          </div>
        </section>
      </motion.div>

      <YouMight />

      {/* Add to Cart Button */}
      <div className="w-full bg-white text-center z-30 px-2 py-3 fixed bottom-0 left-0 cursor-pointer">
        {product.inStock ? (
          <div
            onClick={() => handleCart()}
            className="z-30 bg-primary text-md font-semibold py-2 max-w-5xl rounded-xl m-auto text-white hover:scale-95 transition-transform"
          >
            ADD TO CART
          </div>
        ) : (
          <div className="z-30 bg-primary text-md font-semibold max-w-5xl rounded-xl flex justify-center m-auto text-white">
            <OutOfStock className={"w-full py-2"} product={product} />
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductDetails;
