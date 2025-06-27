import React from 'react'
import PostCardSkeleton from './feedback/skeletons/PostCardSkeleton'

const PostSkeletonList = () => {
    const skeletons = Array.from({ length: 10 })
  return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {skeletons.map((_, idx) => (
        <PostCardSkeleton key={idx} />
      ))}
    </div>
  )
}

export default PostSkeletonList