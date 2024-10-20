import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../auth/LocalStorageContext";
import { useCart } from "../Cart/useCart";

const DeliveryAddressContext = createContext();

export function DeliveryAddressProvider({ children }) {
  const { user } = useLocalStorage();
  const { cartItems } = useCart();

  const isUserWithCart =
    user && cartItems?.length > 0 ? children : <h1>Add item to Cart First</h1>;

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
      {isUserWithCart}
    </DeliveryAddressContext.Provider>
  );
}

export function useDeliveryAddress() {
  return useContext(DeliveryAddressContext);
}
