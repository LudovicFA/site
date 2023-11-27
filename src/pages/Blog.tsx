import { Link } from "react-router-dom"
import PostCard from "../components/PostCard"
import { useI18nMode } from "../context/I18nModeContext";
import { posts } from "../data/blog.index";

const Blog = () => {
  const {lang} = useI18nMode();

  return (
    <section className='max-container  h-[100vh]'>
  
      {
        lang === 'FR' && ( <h1 className="head-text">
        📰  Derniers {" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Articles
        </span>
            </h1>
            )
      }
      {
          lang === 'EN' && ( <h1 className="head-text">
         📰  Last {" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            Posts
          </span>
              </h1>
              )
      }
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