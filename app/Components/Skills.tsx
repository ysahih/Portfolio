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
          <li className='toolicon'><i className="devicon-c-plain-wordmark" ></i> <span>C</span> </li>
          <li className='toolicon'> <i className="devicon-cplusplus-plain"></i> <span>Cplusplus</span></li>
          <li className='toolicon'> <i className="devicon-html5-plain"></i> <span>Html</span></li>
          <li className='toolicon'> <i className="devicon-css3-plain"></i> <span>Css</span></li>
          <li className='toolicon'> <i className="devicon-sass-original"></i> <span>Sass</span></li>
          <li className='toolicon'> <i className="devicon-tailwindcss-original"></i> <span>Tailwind</span></li>
          <li className='toolicon'> <i className="devicon-bootstrap-plain"></i> <span>Bootstrap</span></li>
          <li className='toolicon'> <i className="devicon-react-original"></i> <span>React</span></li>
          <li className='toolicon'> <i className="devicon-javascript-plain"></i> <span>JavaScript</span></li>
          <li className='toolicon'> <i className="devicon-typescript-plain"></i> <span>TypeScript</span></li>
          <li className='toolicon'> <i className="devicon-nextjs-original-wordmark"></i> <span>Nextjs</span></li>
          <li className='toolicon'> <i className="devicon-npm-original-wordmark"></i> <span>NPM</span></li>
          <li className='toolicon'> <i className="devicon-nodejs-plain"></i> <span>Nodejs</span></li>
          <li className='toolicon'> <i className="devicon-express-original"></i> <span>Express</span></li>
          <li className='toolicon'> <i className="devicon-nestjs-original"></i> <span>Nestjs</span></li>
          <li className='toolicon'> <i className="devicon-mysql-original"></i> <span>MySql</span></li>
          <li className='toolicon'> <i className="devicon-postgresql-plain"></i> <span>PostgreSql</span></li>
          <li className='toolicon'> <i className="devicon-bash-plain"></i> <span>Bash</span></li>
          <li className='toolicon'> <i className="devicon-git-plain"></i> <span>Git</span></li>
          <li className='toolicon'> <i className="devicon-github-original"></i> <span>Github</span></li>
          <li className='toolicon'> <i className="devicon-docker-plain"></i> <span>Docker</span></li>
          <li className='toolicon'> <i className="devicon-vscode-plain"></i> <span>Vscode</span></li>
          <li className='toolicon'> <i className="devicon-python-plain"></i> <span>Python</span></li>
          <li className='toolicon'> _ </li>
          </div>
        </ul>
      </div>

      </div>

    </div>
  );
};

export default Skills;