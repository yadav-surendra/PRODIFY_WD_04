import React from 'react';
import './Skills.css';


const skillsData = [
  { title: 'C++', description: 'can develop powerful and efficient software solutions by utilizing its robust object-oriented programming features, standard template library (STL), and advanced memory management capabilities, enabling high-performance.', img: require('./cplus.png') },
  { title: 'React', description: 'can create highly performant and scalable web applications by efficiently managing state, composing reusable component.', img: require('./react.png')},
  { title: 'JS', description: ' can build dynamic and interactive web applications, leveraging its vast ecosystem of libraries and frameworks, asynchronous capabilities, and DOM manipulation techniques to create engaging user experiences across various platforms and devices.', img: require('./js.png') },
  { title: 'Bootstrap', description: 'can efficiently create responsive, mobile-first web pages utilizing its powerful grid system, pre-designed components, and extensive customization options..', img: require('./bootstrap.png')},
  { title: 'HTML', description: 'Expert in HTML5 and semantic markup.', img: require('./html.png')},
  { title: 'CSS', description: 'effectively style and layout web pages using advanced techniques such as flexbox, grid, animations, and media queries to ensure a responsive and visually appealing user experience..', img: require('./css.png')},
  { title: 'C', description: ' powerful low-level capabilities, memory management functions, and system-level programming features.', img: require('./c.png')},
 
];

const Skills = () => {
  return (
    <>
    <div className="skills-container">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">
                <img src={skill.img} alt="" />
            </div>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
           
          </div>
        ))}
      </div>
    </div>
  
</>
  );
}

export default Skills;