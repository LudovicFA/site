import { VerticalTimeline}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineExperience from '../components/TimelineExperience';
import { useEffect, useState } from 'react';
import { useI18nMode } from '../context/I18nModeContext';
import { ExperienceType } from '../types/Experience';


async function getExperiences(lang:string): Promise<ExperienceType[]>{
  if(lang === 'EN'){
    const tempo = await import('../data/en/experiences');
    return tempo.experiences
  }
  else {
    const tempo = await import('../data/fr/experiences');
    return tempo.experiences
  }
}



const Experiences = () => {
  const {lang} = useI18nMode();

  const [experiences, setExperiences] = useState([] as ExperienceType[]);
  useEffect(
    function(){
      getExperiences(lang).then((data: ExperienceType[]) => setExperiences(data));
    }

  , [lang]);

  return (
    <section className='max-container  h-[100vh]'>

      {
          lang === 'FR' && ( <h1 className="head-text">
        📖 Mes {" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            Expériences
          </span>
              </h1>
              )
      }
      {
          lang === 'EN' && ( <h1 className="head-text">
        📖 My {" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            Experiences
          </span>
              </h1>
              )
      }
   
    <VerticalTimeline 
        lineColor="#0072ff "
      >
      {
        experiences?.map((experience, index) => (
          <TimelineExperience experience={experience} key={index}/>
        ))
      }
      </VerticalTimeline>
  </section>
  )
}

export default Experiences