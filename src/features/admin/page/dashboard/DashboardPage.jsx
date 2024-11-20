import DsbActions from "./DsbActions";
import OrderTable from "./OrderTable";
import SearchBar from "../../components/SearchBar";
import FilterBy from "./FilterBy";
import ExportOrderData from "../../components/ExportOrderData";

function DashboardPage() {
  return (
    <section>
      <h1 className="text-2xl  font-bold mb-3">Dashboard</h1>
      <DsbActions />
      <div className="my-7 sm:flex justify-between ">
        <SearchBar placeholder={"Search by order id..."} />
        <span className="flex items-start space-x-2 mt-5 sm:mt-0">
          <ExportOrderData />
          <FilterBy />
        </span>
      </div>
      <div className="mt-5">
        <OrderTable />
      </div>
    </section>
  );
}

export default DashboardPage;
