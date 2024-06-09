import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCarts = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: allCarts = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["carts"],
    queryFn: async () => {
      const res = await axiosPublic.get("/cart");
      return res.data;
    },
  });

  return [allCarts, refetch, isLoading];
};

export default useCarts;
