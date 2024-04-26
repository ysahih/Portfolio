import React from 'react';


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
          <li>_ Collaboration</li>
          <li> _ Relationships</li>
          <li> _ Group management</li>
          <li> _ Interpersonal interactions</li>
          <li> _ Rigor</li>
          <li> _ Problem-solving</li>
          <li> _ Communication</li>
        </ul>
      </div>
      <div className="skills-section">
        <div className='skilltype'>
          <hr />
          <h3>Tools</h3>
        </div>

        <ul  className='skillName'>
          <div className='tools'>
          <li> <i className="devicon-c-plain-wordmark"></i></li>
          <li> <i className="devicon-cplusplus-plain"></i> </li>
          <li> <i className="devicon-html5-plain"></i> </li>
          <li> <i className="devicon-css3-plain"></i> </li>
          <li> <i className="devicon-sass-original"></i> </li>
          <li> <i className="devicon-tailwindcss-original"></i> </li>
          <li> <i className="devicon-bootstrap-plain"></i> </li>
          <li> <i className="devicon-react-original"></i> </li>
          <li> <i className="devicon-javascript-plain"></i> </li>
          <li> <i className="devicon-typescript-plain"></i> </li>
          <li> <i className="devicon-nextjs-original-wordmark"></i> </li>
          <li> <i className="devicon-npm-original-wordmark"></i> </li>
          <li> <i className="devicon-nodejs-plain"></i> </li>
          <li> <i className="devicon-express-original"></i> </li>
          <li> <i className="devicon-mysql-original"></i> </li>
          <li> <i className="devicon-postgresql-plain"></i> </li>
          <li> <i className="devicon-bash-plain"></i> </li>
          <li> <i className="devicon-git-plain"></i> </li>
          <li> <i className="devicon-github-original"></i> </li>
          <li> <i className="devicon-docker-plain"></i> </li>
          <li> <i className="devicon-vscode-plain"></i> </li>
          <li> <i className="devicon-python-plain"></i> </li>
          <li> _ </li>
          </div>
        </ul>
      </div>

      </div>

    </div>
  );
};

export default Skills;