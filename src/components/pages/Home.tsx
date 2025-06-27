"use client";

import { useState } from "react";
import { BeatLoader } from "react-spinners";
import Header from "@/components/Header";
import RecentPosts from "@/components/posts/RecentPosts";
import PostsList from "@/components/posts/PostsList";
import Pagination from "@/components/Pagination";
import useGetPosts from "@/hooks/useGetPosts";
import PostSkeletonList from "@/components/PostSkeletonList";

export default function Home() {
  const [page, setPage] = useState(1);

  const { data: firstPagePosts = [], isLoading: isLoadingFirst, isError: isErrorFirst } = useGetPosts(1);

  const { data: paginatedPosts = [], isLoading, isError } = useGetPosts(page, {
    enabled: page !== 1,
  });

  const allPosts = page === 1 ? firstPagePosts.slice(4) : paginatedPosts;
  const recentPosts = firstPagePosts.slice(0, 4);

  if (isLoadingFirst) return <div className="flex justify-center items-center min-h-screen">
    <BeatLoader color="#6941C6" />
  </div>;

  if (isErrorFirst) return <p className="text-center mt-20 text-red-500">Error loading posts.</p>;

  return (
    <div className="bg-white dark:bg-[#090D1F] min-h-screen lg:px-[80px] transition-all duration-300 pb-4 px-[40px]">
      <Header />
      <h1 className='text-[72px] md:text-[160px] lg:text-[243.8px] uppercase antialiased font-[700]  text-center my-4 text-[#1A1A1A] dark:text-[#FFFFFF] border-y-[1px] border-[#00000057] dark:border-[#FFFFFF]'>
        The Blog
      </h1>
      <RecentPosts posts={recentPosts} />
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">All blog posts</h2>

        {isLoading && (
          <div>
            <PostSkeletonList />
          </div>
        )}

        {!isLoading && !isError && <PostsList posts={allPosts} />}

        {isError && (
          <p className="text-center text-red-500 mt-4">Error loading more posts.</p>
        )}

        <Pagination
          page={page}
          totalPages={10}
          onPrev={() => setPage((p) => p > 1 ? p - 1 : 1)}
          onNext={() => setPage((p) => p < 10 ? p + 1 : 10)}
          onPageChange={(p) => setPage(p)}
        />
      </section>
    </div>
  );
}
