import FeaturedPost from "./FeaturedPost";
import CompactPost from "./CompactPost";
import { Post } from "@/types/post";

type Props = {
  posts: Post[];
};

export default function RecentPosts({ posts }: Props) {

  return (
    <section className="mt-12 space-y-8">
      <h2 className="text-2xl font-bold text-black dark:text-white">Recent blog posts</h2>
      <div className="flex flex-col lg:flex-row gap-5 ">
        <div className="basis-1/2">
          <FeaturedPost post={posts[0]} />
        </div>
        <div className="flex flex-col justify-between gap-5 basis-1/2">
          <div className="basis-1/2 flex">
            <CompactPost post={posts[1]} />
          </div>
          <div className="basis-1/2 flex">
            <CompactPost post={posts[2]} />
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <CompactPost post={posts[3]} />
      </div>
      <div className="lg:hidden block">
        <FeaturedPost post={posts[3]} />

      </div>

    </section>
  );
}


