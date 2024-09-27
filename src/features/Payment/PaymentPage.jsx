import React, { useState } from "react";
import Accordion from "./Accordion";
import { useDeliveryAddress } from "./DeliveryAddressContext";
import { useAddress } from "./useAddress";
import { usePlacedOrder } from "../Order/usePlacedOrder";

// import CreditDebit from "./components/CreditDebit";
// import GooglePay from "./components/GooglePay";
// import Netbanking from "./components/Netbanking";
// import Wallet from "./components/Wallet";

function PaymentPage() {
  const { address } = useDeliveryAddress()
  const { } = useAddress()
  const {postOrder, isPending, isSuccess} = usePlacedOrder()

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
    };

    if (address) {
      postOrder(formData)
    }
  }

  return (
      <div>
        <h1 className="font-semibold text-lg">Select Payment Mode</h1>
        <div>
          {data.map((item) => (
            <Accordion
              key={item.id}
              title={item.title}
              content={item.content}
              icon={item.icon}
              element={item.element}
              isSelected={selectedAccordion === item.id} // Check if this accordion is selected
              onSelect={() => handleSelectAccordion(item.id)} 
            />
          ))}
        </div>
        {address && <div className="w-full bg-white text-center z-30 px-2 py-3 fixed bottom-0 left-0">
          <div onClick={handleSubmit} className="z-30 bg-primary hover:bg-primary-dark cursor-pointer text-md font-semibold py-2 max-w-5xl rounded-xl m-auto text-white">
            {isPending ? "Placing your Order..."  : "Checkout"}
          </div>
        </div>}
      </div>

  );
}

export default PaymentPage;
