import { Link } from 'react-router-dom'
import { skills } from '../data/skills'
import groupSkillsByType from '../lib/utils/groupSkillsByType';
import { posts } from '../data/blog';
import PostCard from '../components/PostCard';

const Home = () => {
  
  // Utilisation de la fonction
  const groupedSkills = groupSkillsByType(skills);
  console.log(groupedSkills);

  return (
    <section className='max-container'>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <div className='flex flex-row'>
          <div className='flex flex-col'>
            <h1 className="head-text">
            👋 Hello, I'm{" "}
                <span className="blue-gradient_text font-semibold drop-shadow">
                  Ludovic
                </span>{" "}
                
            </h1>
            <p className='mt-6 text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, voluptatem. Quaerat possimus tempora animi, itaque aperiam praesentium maxime deserunt repellendus rem ea et architecto corrupti illo velit dolorum cum beatae.
            </p>
            <section className="cta mt-4">
              <Link to="/contact" className="btn">
                Contact
              </Link>
            </section>

          </div>
          <img src="/amico.png" alt="" className='w-96 h-96'/>
          
        </div>

        <hr className="border-slate-200" />

        <h1 className="head-text">
          ⚙️ My {" "}
            <span className="blue-gradient_text font-semibold drop-shadow">
              Skills
            </span>
        </h1>
        <div className='flex flex-row flex-wrap'>
          {Object.entries(groupedSkills).map(([key, skillsOfType]) => (
            <div key={key} className='w-1/3 mb-4 mt-4'>
              <h4 className='subhead-text'>{key}</h4>
              <div  className="mt-2 flex flex-wrap gap-12">
                {skillsOfType.map((skill, index) => (
                  <div className="block-container w-14 h-14" key={index}>
                    <div className="btn-back rounded-xl" />
                    <div className="btn-front rounded-xl flex justify-center items-center">
                      <img
                        src={skill.imageUrl}
                        alt={skill.name}
                        className="w-1/2 h-1/2 object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>

        <hr className="border-slate-200" />
        

        <h1 className="head-text">
          📰 Last {" "}
            <span className="blue-gradient_text font-semibold drop-shadow">
              Posts
            </span>
        </h1>
        <div className='flex flex-row flex-wrap justify-center items-center mt-6'>
          {
            posts.slice(0,2).map((post, index) => (
              <div className='w-1/2'>
                <Link to={`/blog/${post.slug}`} >
                 <PostCard post={post} key={index}/>
                </Link>

              </div>
          ))
          }
        </div>
        
      </div>
  </section>
  )
}

export default Home