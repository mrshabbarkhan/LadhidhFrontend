function ShippingAddress({ order }) {
  return (
    <>
      {order.shippingAddress.addressLine1},{order.shippingAddress.addressLine2},{" "}
      {order.shippingAddress.city}, {order.shippingAddress.state},{" "}
      {order.shippingAddress.zipCode}, {order.shippingAddress.country}
    </>
  );
}

export default ShippingAddress;
