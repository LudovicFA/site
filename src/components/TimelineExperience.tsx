import {  VerticalTimelineElement }  from 'react-vertical-timeline-component';

import { ExperienceType } from '../types/Experience';
import {
    HiOutlineBriefcase
  } from "react-icons/hi2";
type TimelineExperienceProps = {experience: ExperienceType}

export default function TimelineExperience({experience}: TimelineExperienceProps) {
    const {entreprise,client, description, date, statut, environnements, realisations, logo} = experience;
    const temp = `${date.start} ${date.end ? ` - ${date.end}` : ``}`;
    return (
        <>
        
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#fff', color: '#000', borderTop: `3px solid ${ logo?.color}` }}
        contentArrowStyle={{ borderRight: '7px solid  #fff' }}
        date={temp}
        dateClassName="font-bold"
        iconStyle={{ background: logo?.color, color: '#fff' }}
        icon={<HiOutlineBriefcase />}

    >   
        <div className='flex items-center mb-2 h-[32px]'>
            <img src={logo?.src} alt={entreprise} className='mr-4'/>
            <h3 className="flex-1 vertical-timeline-element-title  font-extrabold text-lg">
            {entreprise}{client ? <small className='ms-2 font-semibold text-gray-500 '>- {experience.client}</small> : ''}
            
            </h3>

        </div>


        

        <h4 className="vertical-timeline-element-subtitle text-blue-400">{statut}</h4>
        <p className='font-normal'>
            {description}
        </p>
        <ul className='list-disc ml-8 text-sm font-normal'>
            {
                realisations.map((realisation, index) => (
                    <li key={index}>{realisation}</li>
                ))
            }
        </ul>
        <div className='mt-4'>
            {
                environnements.slice(0,5).map((environnement, index) => (
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" 
                          key={index}>
                            #{environnement}
                    </span>

                ))
            }
        </div>
    </VerticalTimelineElement>
    </>

  )
}
