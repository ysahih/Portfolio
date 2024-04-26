import React from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";


const Skills: React.FC = () => {
  return (
    <div className="skills-container">

        <div className="sectionHeader">
            <h1>DEVELOPED SKILLS</h1>
            <hr />
        </div>

      <div className='skills'>
      <div className="skills-section">
        <div className='skilltype' >
          <hr />
          <h3>Technical Skills</h3>
        </div>

        <ul className='skillName'>
          <li>_ Algorithms & AI</li>
          <li>_ Graphics</li>
          <li>_ Imperative programming</li>
          <li>_ Network & system administration</li>
          <li>_ Object-oriented programming</li>
          <li>_ System programming</li>
          <li>_ Web</li>
        </ul>
      </div>

      <div className="skills-section">
        <div className='skilltype'>
          <hr />
          <h3>Soft Skills</h3>
        </div>
          
        <ul  className='skillName'>
          <li> _ Collaboration</li>
          <li> _ Relationships</li>
          <li> _ Group management</li>
          <li> _ Interpersonal interactions</li>
          <li> _ Rigor</li>
          <li> _ Problem-solving</li>
          <li> _ Communication</li>
        </ul>
      </div>

      </div>

    </div>
  );
};

export default Skills;