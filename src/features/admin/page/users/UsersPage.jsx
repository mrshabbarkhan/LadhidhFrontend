import React from "react";
import SearchBar from "../../components/SearchBar";
import { useUser } from "./useUser";
import Loader from "../../../../components/Loader";
import RiderButtons from "./RiderButtons";
import SelectedOrder from "../RiderPage/SelectedOrder";
import useFilterBySearch from "../../../../hooks/useFilterBySearch";

export default function UsersPage() {
  const { users, isLoading } = useUser();
  const { filteredProducts: filteredUser } = useFilterBySearch(users, "number");

  if (isLoading) {
    return <Loader className={"h-96"} />;
  }

  return (
    <>
      <div className="container mx-auto py-8 sm:px-4">
        {/* Header section */}
        <div className="flex flex-wrap justify-items-center sm:justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-center w-full sm:w-fit mb-10 sm:mb-6">
            Customer List
          </h1>
          <div className="w-full sm:w-auto -translate-y-1/2">
            <SearchBar placeholder="Search by phone number..." />
          </div>
        </div>

        {/* Selected Order section */}
        <SelectedOrder />

        {/* Users list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users &&
            filteredUser?.map((customer) => (
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
            ))}
        </div>
      </div>
    </>
  );
}
