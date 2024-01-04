import { useI18nMode } from "../context/I18nModeContext";
import Jotion from "./works/Jotion";
import Twitch from "./works/Twitch";

const Works = () => {
  const {lang} = useI18nMode();

  return (
    <section className='max-container'>
      {
        lang === 'FR' && ( <h1 className="head-text">
        📰  Mes{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
         Réalisations
        </span>
            </h1>
            )
      }
      {
          lang === 'EN' && ( <h1 className="head-text">
         📰  My {" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            Works
          </span>
              </h1>
              )
      }
      <div className='flex flex-wrap justify-center lg:justify-start mt-6'>
        
          <Jotion />
          <Twitch />
      </div>

       


    </section>
  )
}

export default Works