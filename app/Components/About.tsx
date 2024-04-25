import Image from "next/image";

const About = ()=> {
    return(
      <section id='about' className="about">
        <div className="infos">
        <div className="aboutHeader">
            <h1>ABOUT ME</h1>
            <hr />
        </div>
        
        <div className="aboutme">
        <p>I'm a <span> FRONT-END WEB DEVELOPER </span> with a background in computer systems, algorithms, and data structures. My two years of experience in IT, along with two years of English studies, have given me a solid foundation for web development and creating complex solutions. Recently, I joined the 42 network for a <span> SENIOR DIGITAL IT ARCHITECT DEGREE </span>. I love coding and solving problems through code, and I'm thrilled to work with other fantastic programmers and learn a ton more!</p>
            {/* <p>I'M A  <span> FRONT-END WEB DEVELOPER </span>  WITH A BACKGROUND IN COMPUTER SYSTEMS AND ALGORITHEMS AND DATA-STRUCTURE. MY 2 YEARS OF IT EXPERIENCE HAS GIVEN ME A STRONG FOUNDATION FOR WEB DEVELOPMENT AND BUILDING COMPLEX SOLUTIONS. RECENTLY, I JOINED 42 NETWORK FOR <span> SENIOR DIGITAL IT ARCHITECT DEGREE </span>. I AM PASSIONATE ABOUT CODING AND SOLVING PROBLEMS THROUGH CODE, AND I AM EXCITED TO WORK ALONGSIDE OTHER AMAZING PROGRAMMERS AND LEARN SO MUCH MORE!</p> */}
        </div>
        </div>

        <div className="Photo">
          <img
            src="ysahih.png"
            className="ysahih"
             width={150}
            height={150}
            alt="SAHIH"
            />
        </div>
      </section>
    );
  }


export default About;


