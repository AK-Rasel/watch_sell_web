import axios from "axios";
const axiosOpen = axios.create({
  baseURL: "https://single-product-server.onrender.com/api/v1/",
  timeout: 1000,
});
const useAxiosPublic = () => {
  return axiosOpen;
};

export default useAxiosPublic;
