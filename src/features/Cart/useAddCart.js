import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProductToCart } from "../services/apiCart";
import toast from "react-hot-toast";

export function useAddCart() {

    const queryClient = useQueryClient()
    const { mutate: addToCart, isPending:isLoading, } = useMutation({
        mutationFn: addProductToCart,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey:['cart']
            });
            toast.success("Product Added To cart")
        },
        onError: (err) =>{
            toast.error("Try again later")
            console.log(err)
        }
    });

    return {addToCart, isLoading}
}