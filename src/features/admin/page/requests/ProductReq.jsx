import { useRequest } from "./useRequest";

function ProductReq() {
  const { allRequests } = useRequest();

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">
        Product Notification Requests
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-sm font-medium  uppercase tracking-wider">
                User Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium  uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium  uppercase tracking-wider">
                Phone
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium  uppercase tracking-wider">
                Product
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium  uppercase tracking-wider">
                Pack
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium  uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {allRequests?.length > 0 &&
              allRequests
                .map((request) => (
                  <tr key={request._id} className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap  font-medium ">
                      {request.user?.name || "User not found"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap ">
                      {request.user?.email || "User not found"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap  ">
                      {request.user?.number || "User not found"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm overflow-x-auto flex items-center">
                      <img
                        src={request?.product?.img || "User not found"}
                        alt={"product"}
                        className="w-12 h-12 rounded-lg mr-4"
                      />
                      <span>{request?.product?.title || "User not found"}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm ">
                      {request?.product?.pack || "User not found"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm ">
                      {new Date(request.createdAt).toLocaleDateString("en-GB")}
                    </td>
                  </tr>
                ))
                .reverse()}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductReq;
