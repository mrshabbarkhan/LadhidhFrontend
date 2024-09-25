import { createContext, useContext, useState } from "react";

const DeliveryAddressContext = createContext();

export function DeliveryAddressProvider({ children }) {
  const [address, setAddress] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const updateAddress = (newAddress) => {
    setIsLoading(true);
    setAddress(newAddress);
    setIsLoading(false);
  };

  return (
    <DeliveryAddressContext.Provider
      value={{ address, isLoading, updateAddress }}
    >
      {children}
    </DeliveryAddressContext.Provider>
  );
}

export function useDeliveryAddress() {
  return useContext(DeliveryAddressContext);
}
