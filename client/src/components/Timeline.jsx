import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';

export default function Timeline() {
  return (
    <div>
<VerticalTimeline
    lineColor='#1c92d2'
    >
      <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2024 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">B.Tech- Computer Science and Engineering</h3>
    <h4 className="vertical-timeline-element-subtitle">Jabalpur Engineering College</h4>
    <p>
        CGPA: 8.05
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2023 - 2024"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Class XII</h3>
    <h4 className="vertical-timeline-element-subtitle">St. Joseph's Convent School, Khandwa</h4>
    <p>
        Score: 94%
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2021 - 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Class X</h3>
    <h4 className="vertical-timeline-element-subtitle">St. Joseph's Convent School, Khandwa</h4>
    <p>
      Score: 94.6%
    </p>
  </VerticalTimelineElement>
  
  
</VerticalTimeline>
      
    </div>
  )
}
