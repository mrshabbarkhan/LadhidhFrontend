import React, { useState } from "react";
import Accordion from "./Accordion";
import { useDeliveryAddress } from "./DeliveryAddressContext";
import { useAddress } from "./useAddress";
import { usePlacedOrder } from "../Order/usePlacedOrder";
import OrderSuccess from "../Order/OrderSuccess";
import { useSelector } from "react-redux";

function PaymentPage() {
  const { address } = useDeliveryAddress();
  const { localCart } = useSelector((state) => state.cart);

  const {} = useAddress();
  const {
    postOrder,
    isPending,
    isSuccess,
    data: orderDetails,
  } = usePlacedOrder();

  const [selectedAccordion, setSelectedAccordion] = useState(null);

  const data = [
    {
      id: 1,
      title: "Cash on Delivery",
      icon: "fa-solid fa-money-bill me-2",
    },
  ];

  const handleSelectAccordion = (id) => {
    setSelectedAccordion(id);
  };

  const handleSubmit = () => {
    const formData = {
      shippingAddress: address,
      paymentMethod: "Cod",
      products: localCart.map((c) => ({
        productId: c.product._id,
        quantity: c.quantity.toString(),
      })),
    };

    if (address) {
      postOrder(formData);
    }
  };

  return (
    <div className="mb-20">
      {isSuccess && orderDetails ? (
        <OrderSuccess order={orderDetails.order} />
      ) : (
        <>
          <h1 className="font-semibold text-lg mt-5">Select Payment Mode</h1>
          <div className="mb-20 ">
            {data.map((item) => (
              <Accordion
                key={item.id}
                title={item.title}
                icon={item.icon}
                isSelected={selectedAccordion === item.id}
                onSelect={() => handleSelectAccordion(item.id)}
              />
            ))}
          </div>

          {address && (
            <div className="w-full bg-white text-center z-30 px-2 py-3 fixed bottom-0 left-0">
              <div
                onClick={handleSubmit}
                className="z-30 bg-primary hover:bg-primary-dark cursor-pointer text-md font-semibold py-2 max-w-5xl rounded-xl m-auto text-white"
              >
                {isPending ? "Placing your Order..." : "Checkout"}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default PaymentPage;
