import DsbActions from "./DsbActions";
import OrderTable from "./OrderTable";
import SearchBar from "../../components/SearchBar";
import FilterBy from "./FilterBy";

function DashboardPage() {
  return (
    <section>
      <h1 className="text-2xl  font-bold mb-3">Dashboard</h1>
      <DsbActions />
      <div className="my-7 sm:flex justify-between">
        <SearchBar placeholder={"Search by order id..."} />
        <FilterBy />
      </div>
      <div className="mt-5">
        <OrderTable />
      </div>
    </section>
  );
}

export default DashboardPage;
