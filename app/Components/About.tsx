import { Button } from "@mui/material";
import Image from "next/image";
import toast from "react-hot-toast";
import { FaDownload } from "react-icons/fa";

const About = ()=> {
    return(
      <div id='about' className="about">
        
        <div className="infos">
        <div className="sectionHeader">
            <h1>ABOUT ME</h1>
            <hr />
        </div>
         
        <div className="infos infoHolder">

          <div className="Photo">
            <img
              src="ysahih.png"
              className="ysahih"
              width={150}
              height={150}
              alt="SAHIH"
              />
          </div>

          <div className="welcome">
            <div className="aboutme">
              {/* <p>I'm a <span> WEB DEVELOPER </span> with a background in computer systems, algorithms, and data structures. My two years of experience in IT, along with two years of English studies, have given me a solid foundation for web development and creating complex solutions. Recently, I joined the 42 network for a <span> SENIOR DIGITAL IT ARCHITECT DEGREE </span>. I love coding and solving problems through code, and I'm thrilled to work with other fantastic programmers and learn a ton more!</p> */}
              <p>I am a <span> FRONT-END WEB DEVELOPER </span> with a background in computer systems, algorithms, and data structures, I have two years of experience in IT and two years of English studies under my belt. I am currently furthering my education in the 42 network for a <span> SENIOR DIGITAL IT ARCHITECT DEGREE </span>. Coding and problem-solving through code are my passions, and I am excited to collaborate with talented programmers and expand my knowledge even more!</p>
            </div>
          
            <div className="linkedIn">
                  <Button
                      onClick={()=>{toast.error("resume not found", { style: {
                        borderRadius: '10px',
                        background: '#008080',
                        color: '#fff',
                      },})}}
                      variant="contained"
                      tabIndex={-1}
                      startIcon={<FaDownload style={{width:'15px'}}/>}
                      style={{ backgroundColor: '#008080', width: '100px' , height:'30px', fontSize: '10px'}}
                      >
                      resume
                  </Button>

            </div>
          </div>
          </div>
        </div>

      </div>
    );
  }


export default About;


