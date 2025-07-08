// api.js
import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2M2ODU4NjZiYzE5MjZkZWU5NGYxMDAxMWRkZDUxOCIsInN1YiI6IjY0MWJkODA2YTNlNGJhMDBmNmU4M2ZiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1dIDYu-MJYYPsNEKWc48og0thucuJHLF6MNHCEDI5qo";
const baseUrl =
  "https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=83c685866bc1926dee94f10011ddd518";

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export const get = (url) => {
  return axiosInstance.get(url);
};
