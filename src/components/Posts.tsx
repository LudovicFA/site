import { useI18nMode } from "../context/I18nModeContext";
import { Link } from "react-router-dom";
import PostCard from "./PostCard";
import { posts } from "../data/blog.index";


const Posts = () => {
    const {lang} = useI18nMode();

  return (
    <>
        {
            lang === 'FR' && ( <h2 className="subhead-text">
           📰 Derniers {" "}
            <span className="blue-gradient_text font-semibold drop-shadow">
               Articles
            </span>
                </h2>
                )
        }
         {
            lang === 'EN' && ( <h2 className="subhead-text">
           📰 Last {" "}
            <span className="blue-gradient_text font-semibold drop-shadow">
              Posts 
            </span>
                </h2>
                )
        }
        <div className='flex flex-wrap justify-center lg:justify-start mt-6'>
          {posts.slice(0,2).map((post, index) => (
            <div className='w-full lg:w-1/2 mb-8 lg:flex-row flex-col lg:text-left'  key={post.slug}>
              <Link to={`/blog/${post.slug}`}>
                <PostCard post={post} key={index}/>
              </Link>
            </div>
          ))}
        </div>

    </>
  )
}

export default Posts