import React from 'react'

const PostTags = () => {
    return (
        <div className="mt-3 flex gap-2 flex-wrap">
            <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">
                Design
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                Research
            </span>
            <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2 py-1 rounded-full">
                Presentation
            </span>
        </div>
    )
}

export default PostTags