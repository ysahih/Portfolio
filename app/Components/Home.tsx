import { Button } from "@mui/material";
import { IoSendSharp } from "react-icons/io5";
import { VscGithubAlt } from "react-icons/vsc";

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
            <p className="fourthline">I work on building websites. I'm a <strong>  software engineer </strong> who specializes in front-end web design and development. I know my way around multiple programming languages and I'm all about writing efficient code. I've got a knack for problem-solving and I love working with teams on projects.</p>
          </div>

          <div className="githubutton">
            <a href="https://github.com/ysahih" target="_blank">
              <Button variant="contained"
                className='sendButton'
                startIcon={<VscGithubAlt/>}
                style={{ backgroundColor: '#008080', width: '90px' , height:'30px', fontSize: '12px', fontFamily: 'Montserrat Alternates', textTransform: 'lowercase'}}
                >Github
              </Button> </a>
          </div>
        </div> 
      </section>
    );
  }

export default Home;