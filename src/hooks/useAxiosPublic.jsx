import axios from "axios";
const axiosOpen = axios.create({
  baseURL: "http://localhost:3000/api/v1/",
  timeout: 1000,
});
const useAxiosPublic = () => {
  return axiosOpen;
};

export default useAxiosPublic;
