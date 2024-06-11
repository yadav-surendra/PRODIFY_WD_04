// src/Timeline.js
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from 'react-icons/fa';
import "./Education.css";

const Timeline = () => {
  const degrees = [
    {
      school: 'IOE Pashchimanchal Campus',
      degree: 'Bachelor of Computer Engineering',
      date: '2023 - 2027',
    },
    {
      school: 'Tilottama Campus',
      degree: '+2 Science with Computer Technology',
      date: '2020 - 2022',
    },
    {
      school: 'New Era Boarding School',
      degree: 'SEE',
      date: '2018 - 2020',
    },
  ];

  return (
    <div className="edu-div">
      <h2>Academics</h2>
      <VerticalTimeline>
        {degrees.map((degree, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--education"
            date={degree.date}
            iconStyle={{ background: 'rgb(41, 51, 92)', color:'#fff'}}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title ">{degree.school}</h3>
            <h4 className="vertical-timeline-element-subtitle ">{degree.degree}</h4>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
