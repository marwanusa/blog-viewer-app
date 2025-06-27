import { Post } from "@/types/post";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PostTags from "../PostTags";

type Props = {
  post: Post;
};

export default function FeaturedPost({ post }: Props) {
  return (
        <div className="relative group cursor-pointer">

      <Link href={`/posts/${post.id}`}>
    <div className="w-full bg-white dark:bg-[#10172A] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">

      <Image
        src={`https://picsum.photos/seed/${post.id}/1200/500`}
        alt={post.title}
        width={1200}
        height={500}
        className="w-full h-64 object-cover md:h-[300px] lg:h-[360px]"
      />
      <div className="p-6">
        <p className="text-[14px] text-[#6941C6] font-[600]">Sunday, 1 Jan 2023</p>
        <div className="flex justify-between">
        <h2 className="text-[24px] md:text-2xl font-bold text-black dark:text-white mb-2">
          {post.title}
        </h2>
            <ArrowUpRight size={30}/>
        </div>

        <p className="text-[16px] text-gray-700 dark:text-gray-300 line-clamp-3">
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
