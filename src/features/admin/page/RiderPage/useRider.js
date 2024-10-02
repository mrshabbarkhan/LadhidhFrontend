import { useQuery } from "@tanstack/react-query";
import { getRiders } from "../../../services/apiRider";

export function useRider() {
    const { data: riders, isPending: isLoading, isSuccess } = useQuery({
        queryKey: ["riders"],
        queryFn: getRiders,
    });

    return { riders, isLoading, isSuccess };
}