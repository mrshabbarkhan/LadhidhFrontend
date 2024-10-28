function useOrderStatus(order) {
  let orderStatusCheck;

  if (order.orderStatus === 3) {
    orderStatusCheck = "Delivered";
  } else if (order.orderStatus === 2) {
    orderStatusCheck = "Pickup";
  } else if (order.orderStatus === 1) {
    orderStatusCheck = "Assigned";
  } else if (order.orderStatus == -1) {
    orderStatusCheck = "Cancelled";
  } else {
    orderStatusCheck = "Pending";
  }
  return orderStatusCheck;
}

export default useOrderStatus;
