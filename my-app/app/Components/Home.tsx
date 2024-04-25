import { Button } from "@mui/material";
import { IoSendSharp } from "react-icons/io5";
import { VscGithubAlt } from "react-icons/vsc";

const Home = ()=> {
    return(
      <section className="Home">
        <div className="welcome">
  
          <div className="what">
            <p  className="firstline">Hi, my name is</p>
          </div>

          <div className="name">
            <h1 className="secondline">Youssef Sahih.</h1>
            <h1 className="thirdline">I build web stuff.</h1>
          </div>

          <div className="me">
            <p className="fourthline">I am a dedicated software developer and student at 42 network. Skilled in multiple programming languages and familiar with software development lifecycle. Committed to writing      efficient code and expanding skills. Strong problem-solving ability and collaborative mindset for team projects.</p>
          </div>

          <div className="githubutton">
            <Button variant="contained"
              className='sendButton'
              startIcon={<VscGithubAlt/>}
              style={{ backgroundColor: '#008080', width: '90px' , height:'30px', fontSize: '12px', fontFamily: 'Montserrat Alternates', textTransform: 'lowercase'}}
              >Gtihub
            </Button>
          </div>
        </div> 
      </section>
    );
  }

export default Home;