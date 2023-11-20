import {  VerticalTimelineElement }  from 'react-vertical-timeline-component';

import { ExperienceType } from '../types/Experience';
import {
    HiOutlineBriefcase
  } from "react-icons/hi2";
type TimelineExperienceProps = {experience: ExperienceType}

export default function TimelineExperience({experience}: TimelineExperienceProps) {
    const {entreprise,client, description, date, statut, environnements} = experience;
    const temp = `${date.start} ${date.end ? ` - ${date.end}` : ``}`;
    return (
    <VerticalTimelineElement
        animate={true}
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#fff', color: '#000', borderTop: '3px solid #2b77e7' }}
        contentArrowStyle={{ borderRight: '7px solid  #fff' }}
        date={temp}
        dateClassName="font-bold"
        iconStyle={{ background: '#2b77e7', color: '#fff' }}
        icon={<HiOutlineBriefcase />}

    >
        <h3 className="vertical-timeline-element-title subsubhead-text">{entreprise} {client ? <small>- {experience.client}</small> : ''}</h3>
        <h4 className="vertical-timeline-element-subtitle text-blue-400">{statut}</h4>
        <p>
            {description}
        </p>
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
  )
}
