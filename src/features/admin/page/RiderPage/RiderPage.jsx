import { useSelector } from "react-redux";
import Loader from "../../../../components/Loader";
import SearchBar from "../../components/SearchBar";
import { useRider } from "./useRider"
import RiderButtons from "../users/RiderButtons";

function RiderPage() {

    const {riders, isLoading} = useRider()
    
     const debouncedTerm = useSelector((state) => state.search.debouncedTerm);

     const filteredProducts = riders?.filter((user) =>
       user.number?.toLowerCase().includes(debouncedTerm.toLowerCase())
     );

     if (isLoading) {
       return <Loader className={"h-96"} />;
     }

     return (
       <div className="container mx-auto py-8 px-4">
         <div className="flex flex-wrap justify-center sm:justify-between mb-5">
           <h1 className="text-3xl font-semibold text-center mb-8">
             Riders List
           </h1>
           <SearchBar placeholder={"serach by number...."} />
         </div>
         <div className="flex flex-wrap gap-6 ">
           {riders?.length &&
             filteredProducts?.map((customer) => (
               <div
                 key={customer._id}
                 className="bg-white w-80 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
               >
                 <h2 className="text-xl font-semibold mb-2 text-gray-800">
                   {customer.name}
                 </h2>
                 <p className="text-gray-600 ">
                   <span className="font-medium">Email:</span> {customer.email}
                 </p>
                 <p className="text-gray-600">
                   <span className="font-medium">Phone:</span> {customer.number}
                 </p>
                 <p className="text-gray-600">
                   <span className="font-medium">Address:</span>{" "}
                   {customer.Addres}
                 </p>

                 <RiderButtons user={customer} />
               </div>
             ))}
         </div>
       </div>
     );
}

export default RiderPage
