import { useQuery } from "@tanstack/react-query";
import userDeletionService from "../../../services/apiUserDeleteReq";

function useUserReq() {
  const { data: userRequests, isPending } = useQuery({
    queryKey: ["userDelete"],
    queryFn: userDeletionService.userDeletionRequsts,
  });

  return { userRequests, isPending };
}

export default useUserReq;
