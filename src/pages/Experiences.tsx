import { VerticalTimeline}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../data/fr/experiences';
import TimelineExperience from '../components/TimelineExperience';

const Experiences = () => {
  return (
    <section className='max-container  h-[100vh]'>
    <h1 className="head-text">
           📖 My {" "}
            <span className="blue-gradient_text font-semibold drop-shadow">
              Experiences
            </span>
        </h1>

    <VerticalTimeline 
        lineColor="#00c6ff "
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