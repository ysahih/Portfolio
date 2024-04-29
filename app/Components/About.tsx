import Image from "next/image";

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
          
            <div className="aboutme">
              {/* <p>I'm a <span> WEB DEVELOPER </span> with a background in computer systems, algorithms, and data structures. My two years of experience in IT, along with two years of English studies, have given me a solid foundation for web development and creating complex solutions. Recently, I joined the 42 network for a <span> SENIOR DIGITAL IT ARCHITECT DEGREE </span>. I love coding and solving problems through code, and I'm thrilled to work with other fantastic programmers and learn a ton more!</p> */}
              <p>As a <span> WEB DEVELOPER </span> with a background in computer systems, algorithms, and data structures, I have two years of experience in IT and two years of English studies under my belt. I am currently furthering my education in the 42 network for a <span> SENIOR DIGITAL IT ARCHITECT DEGREE </span>. Coding and problem-solving through code are my passions, and I am excited to collaborate with talented programmers and expand my knowledge even more!</p>
            </div>
          
          </div>
          </div>

      </div>
    );
  }


export default About;


