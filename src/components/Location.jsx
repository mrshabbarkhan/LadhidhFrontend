import { useCallback, useEffect, useRef, useState } from "react";
import SearchSvg from "../assets/ui/SearchSvg";
import { useGeoLocation } from "../hooks/useGeoLocation";
import { toast } from "sonner";

function Location() {
  const [location, setLocation] = useState("Fetching location...");
  const [manualLocation, setManualLocation] = useState(() => {
    const storedLocation = localStorage.getItem("location");
    return storedLocation ? JSON.parse(storedLocation) : null;
  });
  const [searchQry, setSearchQry] = useState("");
  const [toggle, setToggle] = useState(false);
  const debounceRef = useRef(null);
  const [searchData, setSearchData] = useState(null);

  const { data, error } = useGeoLocation();

  useEffect(() => {
    if (manualLocation) {
      setLocation(manualLocation);
    } else if (data) {
      setLocation(data);
    }
  }, [data, manualLocation]);

  if (error) {
    toast.error("couldn't get location");
  }

  const debouncedSearchByLocation = useCallback(async (query) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(async () => {
      try {
        const response = await fetch(
          `https://geocode.maps.co/search?q=${query}&api_key=66d5874d2c283371371612jlg24937f`
        );
        const data = await response.json();
        setSearchData(data);
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    }, 500);
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchQry(value);
    debouncedSearchByLocation(value);
  };

  const handleLiClick = (location) => {
    setManualLocation(location);
    localStorage.setItem("location", JSON.stringify(location));
    setToggle(false);
    setSearchQry("");
    setSearchData(null);
  };

  return (
    <div>
      <p
        onClick={() => setToggle(true)}
        className="font-semibold text-sm line-clamp-2 cursor-pointer"
      >
        {location}
      </p>

      {toggle ? (
        <div
          onClick={(e) =>
            e.target.className.includes("overley") && setToggle(false)
          }
          className=" fixed h-screen top-0 left-0  z-30 w-full flex pt-16 sm:pt-20 px-2 md:px-24 lg:px-48 justify-center overley bg-black/30 "
        >
          <div className="w-full overley ">
            <span className="flex bg-white p-1 items-center  pl-2 rounded-t-lg gap-2  text-black">
              <SearchSvg />
              <input
                className="  w-full outline-none border-none focus:ring-0"
                placeholder="Search location..."
                value={searchQry}
                onChange={handleChange}
              />
            </span>
            {searchData && (
              <ul className="-translate-y-2 z-20 rounded-b-md px-2 py-1 bg-white text-black">
                {searchData?.map((data, index) => (
                  <li
                    onClick={() => handleLiClick(data.display_name)}
                    key={index}
                    className="py-1 px-2 rounded-md font-medium mb-3 hover:bg-gray-200 transition-all duration-200 cursor-pointer"
                  >
                    {data.display_name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Location;
