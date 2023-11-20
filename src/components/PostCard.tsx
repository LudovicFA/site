import React from 'react'
import { Post } from '../types/Post'

type PostCardProps = {
    post: Post
}

const PostCard = ({post}: PostCardProps) => {
  return (

    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={`/blog/images/${post.image}`} alt={post.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{post.title}</div>
        <p className="text-gray-700 text-base">
            {post.subtitle}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {
            post.tags.map((tag, index) => (
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={index}>#{tag}</span>

            ))
        }
      </div>
    </div>
  )
}

export default PostCard