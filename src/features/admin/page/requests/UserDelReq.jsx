import Badge from "../../../../components/Badge";
import Loader from "../../../../components/Loader";
import useDeleteUser from "./useDeleteUser";
import useUserReq from "./useUserReq";

function UserDelReq() {
  const { userRequests, isPending } = useUserReq();
  const { deleteUser } = useDeleteUser();

  if (isPending) {
    return <Loader className={"h-96"} />;
  }

  if (!userRequests) {
    return <h1>No Requests Found</h1>;
  }

  function handleDelete(id) {
    const confirm = window.confirm("Are you sure to remove user");
    if (!confirm) return;
    deleteUser(id);
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4 relative w-fit">
        User Account deletion Requests <Badge data={userRequests} />
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
                Reason
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium  uppercase tracking-wider">
                Action
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium  uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {userRequests?.length > 0 &&
              userRequests
                .map((request) => (
                  <tr key={request._id} className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap  font-medium ">
                      {request.user?.name || "User not found"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap ">
                      {request.user?.email || "User not found"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {request.user?.number || "User not found"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {request.reason}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm overflow-x-auto flex items-center">
                      <span
                        onClick={() => handleDelete(request._id)}
                        className="px-2 py-0.5 bg-primary text-white rounded cursor-pointer"
                      >
                        Delete
                      </span>
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

export default UserDelReq;
