import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Post } from "@/types/post";

const fetchPostById = async (id: string): Promise<Post> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const response = await axios.get(`${baseUrl}/posts/${id}`);
  return response.data;
};

const useGetPostById = (id: string) => {
  return useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchPostById(id),
    staleTime: 1000 * 60 * 5,
    enabled: !!id,
  });
};

export default useGetPostById;
