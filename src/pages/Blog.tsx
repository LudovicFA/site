import { Link } from "react-router-dom"
import PostCard from "../components/PostCard"
import { useI18nMode } from "../context/I18nModeContext";
import { useEffect, useState } from "react";
import { Post } from "../types/Post";
import { posts } from "../data/blog.index";

// async function getPosts(lang:string): Promise<Post[]>{
//   if(lang === 'EN'){
//     const tempo = await import('../data/en/blog');
//     return tempo.posts
//   }
//   else {
//     const tempo = await import('../data/fr/blog');
//     return tempo.posts
//   }
// }


const Blog = () => {
  const {lang} = useI18nMode();

  // const [posts, setPosts] = useState([] as Post[]);
  // useEffect(
  //   function(){
  //     getPosts(lang).then((data: Post[]) => setPosts(data));
  //   }

  // , [lang]);

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