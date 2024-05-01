import { Button } from "@mui/material";
import { FaLinkedin } from "react-icons/fa";


const Home = ()=> {
    return(
      <section className="home">
        <div className="homeWelcome">
  
          <div className="what">
            <p  className="firstline">Hello, my name is</p>
          </div>

          <div className="name">
            <h1 className="secondline">Youssef Sahih.</h1>
            <h1 className="thirdline">I love doing things quickly.</h1>
          </div>

          <div className="me">
            <p className="fourthline">As a <span>SOFTWARE ENGINEER</span> specializing in front-end web design and development, I am passionate about building efficient websites. With expertise in multiple programming languages, I confidently navigate various technical challenges. I thrive on problem-solving and enjoy collaborating with teams on projects. My dedication to writing efficient code ensures optimal performance and user experiences. Let's work together to create exceptional digital experiences.</p>
          </div>

          <div className="linkedIn">
            <a href="https://www.linkedin.com/in/youssef-sahih/" target="_blank">
              <Button variant="contained"
                className='sendButton'
                startIcon={<FaLinkedin/>}
                style={{ backgroundColor: '#008080', width: '100px' , height:'30px', fontSize: '12px', fontFamily: 'Montserrat Alternates', textTransform: 'lowercase'}}
                >LinkedIn
              </Button> </a>
          </div>
        </div> 
      </section>
    );
  }

export default Home;