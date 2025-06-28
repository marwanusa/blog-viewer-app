import { Post } from "@/types/post";
import Image from "next/image";
import Link from "next/link";
import PostTags from "../PostTags";

type Props = {
  post: Post;
};

export default function GridPostCard({ post }: Props) {
  return (
    <div className="relative group cursor-pointer w-full h-full">
      <div className="bg-white dark:bg-[#10172A] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        <Link href={`/posts/${post.id}`}>
          <div className="relative w-full h-48 sm:h-52 md:h-56 lg:h-48 xl:h-52">
            <Image
              src={`https://picsum.photos/seed/${post.id}/1200/500`}
              alt={post.title}
              fill
              className="object-cover rounded-t-xl"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        </Link>

        <div className="p-4 flex flex-col flex-grow">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Sunday, 1 Jan 2023</p>
          <h3 className="text-lg font-semibold text-black dark:text-white mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
            {post.title}
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2 flex-grow">
            {post.body}
          </p>
          <PostTags />
        </div>
      </div>

      <Link href={`/posts/${post.id}`} className="absolute inset-0 rounded-xl">
        <div className="bg-pink-500/40 dark:bg-purple-700/30 backdrop-blur-sm flex items-center justify-center h-0 group-hover:h-full transition-all duration-300 rounded-xl">
          <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">
            Go to full post →
          </span>
        </div>
      </Link>
    </div>
  );
}
