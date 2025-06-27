import { Post } from "@/types/post";
import Image from "next/image";
import Link from "next/link";
import PostTags from "../PostTags";

type Props = {
  post: Post;
};

export default function CompactPost({ post }: Props) {
  return (
    <div className="relative group cursor-pointer">
      <Link href={`/posts/${post.id}`}>

        <div className="flex flex-col md:flex-row gap-4 bg-white dark:bg-[#10172A] rounded-xl overflow-hidden shadow-md cursor-pointer">

          <Image
            src={`https://picsum.photos/seed/${post.id}/1200/500`}
            alt={post.title}
            width={1200}
            height={500}
            className="w-full md:w-1/2 h-48 md:h-auto object-cover"
          />
          <div className="p-4 flex flex-col gap-3">
            <p className="text-[14px] text-[#6941C6] font-[600]">Sunday, 1 Jan 2023</p>
            <h3 className="text-[18px] font-semibold  text-black dark:text-white mb-1">
              {post.title}
            </h3>
            
            <p className="text-[16px] font-[400] text-gray-700 dark:text-gray-300 ">
              {post.body}
            </p>
            <PostTags/>
          </div>

        </div>
        <div className="absolute inset-0 bg-pink-500/40 dark:bg-purple-700/30 backdrop-blur-sm rounded-xl flex items-center justify-center w-0 group-hover:w-[100%] transition-all duration-300">
          <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">Go to full post →</span>
        </div>
      </Link>
    </div>

  );
}
