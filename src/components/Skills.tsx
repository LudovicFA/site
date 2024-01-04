import { useEffect, useState } from "react";
import { useI18nMode } from "../context/I18nModeContext";
import { Skill } from "../types/Skill";
import groupSkillsByType from "../lib/utils/groupSkillsByType";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

async function getSkills(lang:string): Promise<Skill[]>{
    if(lang === 'EN'){
      const tempo = await import('../data/en/skills');
      return tempo.skills
    }
    else {
      const tempo = await import('../data/fr/skills');
      return tempo.skills
    }
  }
  


const Skills = () => {

    const {lang} = useI18nMode();

    const [skills, setSkills] = useState([] as Skill[]);
    useEffect(
      function(){
        getSkills(lang).then((data: Skill[]) => setSkills(data));
      }
  
    , [lang]);

  return (
    <>
        {
            lang === 'FR' && ( <h2 className="subhead-text">
          ⚙️ Mes {" "}
            <span className="blue-gradient_text font-semibold drop-shadow">
              Compétences
            </span>
                </h2>
                )
        }
        {
            lang === 'EN' && ( <h2 className="subhead-text">
          ⚙️ My {" "}
            <span className="blue-gradient_text font-semibold drop-shadow">
              Skills
            </span>
                </h2>
                )
        }
        <div className='flex flex-row flex-wrap'>
          {Object.entries(groupSkillsByType(skills)).map(([key, skillsOfType]) => (
            <div key={key} className='p-2 w-full sm:w-1/2 md:w-1/3 mb-4 mt-4'>
              <h4 className='subsubhead-text border-b-2 border-blue-500 '>{key}</h4>
              <div  className="mt-2 flex flex-wrap gap-12 py-4">
                {skillsOfType.map((skill, index) => (
                  <>
                  <div 
                    className="block-container w-14 h-14" 
                    data-tooltip-id={`skill-${index}`} data-tooltip-content={skill.name}
                    key={index}
                  >
                    <div className="btn-back rounded-xl" />
                      <div className="btn-front rounded-xl flex justify-center items-center">
                        <img
                          src={skill.imageUrl}
                          alt={skill.name}
                          className="w-1/2 h-1/2 object-contain"
                        />
                      </div>
                    <Tooltip id={`skill-${index}`} />
                  </div>
                  </>
                ))}
              </div>
            </div>
          ))}

        </div>
    </>
  )
}

export default Skills