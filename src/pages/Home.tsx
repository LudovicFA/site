import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Posts from '../components/Posts';

const Home = () => {

  return (
    <section className='max-container'>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <div className='flex flex-row'>
          <div className='flex flex-col'>
            <Hero />
          </div>
          <img src="/amico.png" alt="" className='w-96 h-96'/>
          
        </div>

        <hr className="border-slate-200" />

        <Skills />

        <hr className="border-slate-200" />
        
        <Posts />
        
      </div>
  </section>
  )
}

export default Home