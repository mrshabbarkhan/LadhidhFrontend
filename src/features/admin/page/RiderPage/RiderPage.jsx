import Loader from "../../../../components/Loader";
import SearchBar from "../../components/SearchBar";
import { useRider } from "./useRider";
import RiderButtons from "../users/RiderButtons";
import SelectedOrder from "./SelectedOrder";
import useFilterBySearch from "../../../../hooks/useFilterBySearch";
import Badge from "../../../../components/Badge";

function RiderPage() {
  const { riders, isLoading } = useRider();
  const { filteredProducts: filteredRiders } = useFilterBySearch(
    riders,
    "number"
  );

  if (isLoading) {
    return <Loader className={"h-96"} />;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-wrap justify-center sm:justify-between mb-5">
        <h1 className="text-3xl font-semibold text-center mb-8 relative">
          Riders List <Badge data={riders} />
        </h1>
        <SearchBar placeholder={"Search by number...."} />
      </div>

      <SelectedOrder />

      <div className="flex flex-wrap gap-6 ">
        {filteredRiders?.length ? (
          filteredRiders?.map((customer) => (
            <div
              key={customer._id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold mb-2">{customer.name}</h2>
              <p className="">
                <span className="font-medium">Email: </span>
                {customer.email}
              </p>
              <p className="my-0.5">
                <span className="font-medium">Phone: </span>
                {customer.number}
              </p>
              <p className="text-sm">
                <span>Address:</span>{" "}
                {customer.addresses?.length > 0
                  ? `${customer.addresses[0].addressLine1}, ${customer.addresses[0].city}, ${customer.addresses[0].zipCode}`
                  : "No initial address"}
              </p>
              {/* Rider buttons */}
              <RiderButtons user={customer} />
            </div>
          ))
        ) : (
          <h1>No Rider Match</h1>
        )}
      </div>
    </div>
  );
}

export default RiderPage;
