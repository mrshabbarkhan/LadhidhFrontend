import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleRider } from "../../../services/apiRider";
import toast from "react-hot-toast";

export function useToggleRider() {

    const queryClient = useQueryClient()
    const {mutate:changeRole, isPending, isSuccess } = useMutation({
        mutationFn: toggleRider,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey : ['users']['riders']
            })
            toast.success("User role changed successfully")
        },
        onError: (err) => {
            toast.error("Something went wrong")
            console.log(err)
        }
    })

    return {changeRole,isPending,isSuccess}
}