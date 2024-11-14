import { useQuery } from "@tanstack/react-query";
import { getCoupans } from "../../../services/apiCoupan";

function useCoupan() {
  return useQuery({
    queryKey: ["coupans"],
    queryFn: getCoupans,
  });
}

export default useCoupan;
