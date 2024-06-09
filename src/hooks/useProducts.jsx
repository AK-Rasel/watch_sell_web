import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useProducts = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: allProducts = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await axiosPublic.get("/products");
      return res.data;
    },
  });
  return [allProducts, refetch, isLoading];
};

export default useProducts;
