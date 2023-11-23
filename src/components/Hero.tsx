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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, voluptatem. Quaerat possimus tempora animi, itaque aperiam praesentium maxime deserunt repellendus rem ea et architecto corrupti illo velit dolorum cum beatae.
        </p>
        <section className="cta mt-4">
            <Link to="/contact" className="btn">
            Contact
            </Link>
        </section>
    </>
  )

}

export default Hero