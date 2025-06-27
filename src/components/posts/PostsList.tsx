import { Post } from "@/types/post";
import GridPostCard from "./GridPostCard";

type Props = {
  posts: Post[];
};

export default function PostsList({ posts }: Props) {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
      {posts.map((post) => (
        <GridPostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
