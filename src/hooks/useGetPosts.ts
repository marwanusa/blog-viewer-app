import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Post } from "@/types/post";

const fetchPosts = async (page: number): Promise<Post[]> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const response = await axios.get(`${baseUrl}/posts?_page=${page}&_limit=10`);
  return response.data;
};

const useGetPosts = (page: number, options = {}) => {
  return useQuery({
    queryKey: ["posts", page],
    queryFn: () => fetchPosts(page),
    staleTime: 1000 * 60 * 5,
    ...options,
  });
};

export default useGetPosts;
