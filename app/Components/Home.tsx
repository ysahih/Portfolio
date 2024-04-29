import { Button } from "@mui/material";
import { FaLinkedin } from "react-icons/fa";


const Home = ()=> {
    return(
      <section className="home">
        <div className="welcome">
  
          <div className="what">
            <p  className="firstline">Hello, my name is</p>
          </div>

          <div className="name">
            <h1 className="secondline">Youssef Sahih.</h1>
            <h1 className="thirdline">I love doing things quickly.</h1>
          </div>

          <div className="me">
            <p className="fourthline">I work on building websites. I'm a <span> SOFTWARE ENGINEER </span> who specializes in front-end web design and development. I know my way around multiple programming languages and I'm all about writing efficient code. I've got a knack for problem-solving and I love working with teams on projects.</p>
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