import { Link } from 'react-router-dom';
import { useI18nMode } from '../context/I18nModeContext';

const Hero = () => {
  const {lang} = useI18nMode();

  return (
    <>
        {
        lang === 'FR' && (
          <h1 className="head-text">
          👋 Salut, je suis {" "}
              <span className="blue-gradient_text font-semibold drop-shadow">
                Ludovic
              </span>
              
          </h1>
        )
      }
      {
        lang === 'EN' && (
          <h1 className="head-text">
          👋 Hello, I'm{" "}
              <span className="blue-gradient_text font-semibold drop-shadow">
                Ludovic
              </span>
              
          </h1>
        )
      }

        <p className='mt-6 text-lg'>
            Développeur Web JS Fullstack, PHP depuis 14ans.<br />
            Sur ce site vous retrouver <a href="/works" className='font-semibold text-black hover:text-blue-500 hover:cursor-pointer'>Mes Réalisations</a> et <a href="/blog"  className='font-semibold text-black hover:text-blue-500 hover:cursor-pointer'>Mes articles</a> que je vous invite à regarder.<br />
            N'hésitez pas me contacter si vous souhaitez échanger sur votre projet. 
        </p>
        {/* <p>
        Salut, c'est LuDev ! 💻 Passionné de code, je transforme des idées en réalité digitale avec style. De la magie du développement à la résolution de bugs, chaque ligne de code compte. Prêt à créer ensemble quelque chose d'incroyable ? Let's code the future! 🚀✨
        </p> */}
        <section className="cta mt-4">
            <Link to="/contact" className="btn">
            Me Contacter
            </Link>
        </section>
    </>
  )

}

export default Hero