import { useSearchParams } from "react-router-dom";

function FilterBy() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSelectChange(e) {
    const value = e.target.value;
    if (value) {
      searchParams.set("filter", value);
    } else {
      searchParams.delete("filter");
    }
    setSearchParams(searchParams);
  }

  return (
    <div className="relative mb-4">
      <select
        id="filterBy"
        className="block ml-auto sm:w-full form-select appearance-none pr-7 py-1.5 border border-gray-300 bg-white rounded-md shadow-lg hover:bg-gray-100 focus:outline-none text-sm transition ease-in-out duration-200 cursor-pointer"
        onChange={handleSelectChange}
        value={searchParams.get("filter") || ""}
      >
        <option value="all" className="">
          All
        </option>
        <option
          value="Pending"
          className="form-multiselect hover:bg-purple-500"
        >
          Pending
        </option>
        <option value="Cancelled" className="form-multiselect">
          Cancelled
        </option>
        <option value="Assigned" className="form-multiselect">
          Assigned
        </option>
        <option value="Delivered" className="form-multiselect">
          Delivered
        </option>
      </select>
    </div>
  );
}

export default FilterBy;
