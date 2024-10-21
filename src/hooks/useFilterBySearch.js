import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../features/admin/page/searchSlice";
import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

function useFilterBySearch(arr, filterBy) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const debouncedTerm = useSelector((state) => state.search.debouncedTerm);

  useEffect(() => {
    return () => dispatch(setSearchTerm(""));
  }, [navigate]);

  const filteredProducts = useMemo(() => {
    return arr?.filter((prod) =>
      prod?.[filterBy]?.toLowerCase().includes(debouncedTerm.toLowerCase())
    );
  }, [arr, debouncedTerm, filterBy]);

  return { filteredProducts };
}

export default useFilterBySearch;
