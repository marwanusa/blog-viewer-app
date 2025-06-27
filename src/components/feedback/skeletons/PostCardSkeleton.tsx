import React from 'react'

const PostCardSkeleton = () => {
    return (
        <div className="animate-pulse bg-gray-100 dark:bg-[#1A1F36] rounded-xl overflow-hidden shadow-md">
            <div className="h-48 bg-gray-300 dark:bg-gray-700 w-full" />
            <div className="p-4 space-y-2">
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4" />
                <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-full" />
                <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-5/6" />
                <div className="flex gap-2 mt-3">
                    <div className="h-5 w-16 bg-gray-300 dark:bg-gray-600 rounded-full" />
                    <div className="h-5 w-16 bg-gray-300 dark:bg-gray-600 rounded-full" />
                </div>
            </div>
        </div>
    )
}

export default PostCardSkeleton