import React from 'react';
import './Skills.css';


const skillsData = [
  { title: 'C++', description: 'Experienced in ES6+, React, Node.js, and more.', img: require('./cplus.png') },
  { title: 'React', description: 'Skilled in Python for web development and data analysis.', img: require('./react.png')},
  { title: 'JS', description: 'Proficient in CSS3, Sass, and responsive design.', img: require('./js.png') },
  { title: 'Bootstrap', description: 'Expert in HTML5 and semantic markup.', img: require('./bootstrap.png')},
  { title: 'HTML', description: 'Expert in HTML5 and semantic markup.', img: require('./html.png')},
  { title: 'CSS', description: 'Expert in HTML5 and semantic markup.', img: require('./css.png')},
  { title: 'C', description: 'Expert in HTML5 and semantic markup.', img: require('./c.png')},
 
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

