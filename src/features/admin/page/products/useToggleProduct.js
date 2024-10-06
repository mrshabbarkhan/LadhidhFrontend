import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleStock } from "../../../services/apiProduct";
import toast from "react-hot-toast";

export function useToggleProduct() {
    
    const queryClient = useQueryClient()
    const {mutate: toggleStatus, isPending, } = useMutation({
        mutationFn: toggleStock,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey : ["products"]
            })
            toast.success("Stock Toggle Changed")
        },
        onError: (error) => {
            toast.error("Something happens wrong")
            console.log("Toggle Error", error)
        }
    })

    return {toggleStatus, isPending}
}