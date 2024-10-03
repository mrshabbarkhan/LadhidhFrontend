import { useMutation } from "@tanstack/react-query";
import { assignOrder } from "../services/apiOrders";
import toast from "react-hot-toast";


export function useAssignOrder() {
    
    const {mutate: postAssignOrder, isPending, isSuccess } = useMutation({
        mutationFn: assignOrder,
        onSuccess: (data) => {
            toast.success("order assign success")
            console.log(data)
        }
    })

    return {postAssignOrder, isPending, isSuccess}
}