import { useMutation } from "@tanstack/react-query";
import { placeOrder } from "../services/apiOrders";
import toast from "react-hot-toast";

export function usePlacedOrder(){

    const {mutate:postOrder , isPending , isSuccess } = useMutation({
        mutationFn: placeOrder,
        onSuccess:()=> {
            toast.success("🎉 Order Placed Successfully")
        },
        onError: (err) =>{
            toast.err("Something happens wrong")
            console.log(err)
        }
    })

    return {postOrder, isPending, isSuccess}
}