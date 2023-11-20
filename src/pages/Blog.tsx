import { Link } from "react-router-dom"
import PostCard from "../components/PostCard"
import { posts } from "../data/blog"

const Blog = () => {
  return (
    <section className='max-container  h-[100vh]'>
     <h1 className="head-text">
          📰 Last {" "}
            <span className="blue-gradient_text font-semibold drop-shadow">
              Posts
            </span>
        </h1>

      <div className='flex flex-row flex-wrap justify-center items-center mt-6'>
          {
            posts.map((post, index) => (
              <div className='w-1/2'>
                <Link to={`/blog/${post.slug}`} >
                 <PostCard post={post} key={index}/>
                </Link>

              </div>
          ))
          }
        </div>
    </section>
  )
}

export default Blog