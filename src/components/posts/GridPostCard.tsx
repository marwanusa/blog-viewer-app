import { Post } from "@/types/post";
import Image from "next/image";
import Link from "next/link";
import PostTags from "../PostTags";

type Props = {
  post: Post;
};

export default function GridPostCard({ post }: Props) {
  return (
    <div className="relative group cursor-pointer">
      <Link href={`/posts/${post.id}`}>
        <div className="bg-white dark:bg-[#10172A] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300" >

          <Image
            src={`https://picsum.photos/seed/${post.id}/1200/500`}
            alt={post.title}
            width={1200}
            height={500}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Sunday, 1 Jan 2023</p>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
              {post.title}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2">
              {post.body}
            </p>
            <PostTags/>
          </div>
        </div>
        <div className="absolute inset-0 bg-pink-500/40 dark:bg-purple-700/30 backdrop-blur-sm rounded-xl flex items-center justify-center h-0 group-hover:h-[100%] transition-all duration-300">
          <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">Go to full post →</span>
        </div>
      </Link>
    </div>
  );
}
