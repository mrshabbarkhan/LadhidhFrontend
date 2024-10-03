import img from "../../assets/images/product/1.jpg";

function OrderCard({ order = {} }) {
  
  const { orderItems, totalPrice, createdAt } = order 

  return (
    <section className="flex justify-between my-6">
      <div className="flex gap-5">
        <img
          className="w-20 rounded-xl"
          src={`${orderItems[0]?.product?.img}`}
          alt="product"
        />
        <div>
          <h1 className="font-semibold text-primary ">The Ladhidh Shop</h1>
          <p className="text-sm leading-3 font-semibold">
            {orderItems?.map((order) => (
              <h1 className="mb-1 leading-3">{order?.product?.title}</h1>
            ))}
          </p>
          <p className="mt-1">{orderItems?.length} Items</p>
        </div>
      </div>
      <div className="text-end space-y-6">
        <h3 className="text-primary font-semibold text-sm">{new Date(createdAt).toLocaleDateString()}</h3>
        <button className="bg-red-200 text-primary-dark p-1 px-3 rounded-md text-sm hover:text-white hover:bg-primary">
          Reorder
        </button>
      </div>
    </section>
  );
}

export default OrderCard;
