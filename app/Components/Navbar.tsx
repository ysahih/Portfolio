import Image from "next/image";
import { CiHome } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { GiSkills } from "react-icons/gi";
import { GoProjectRoadmap } from "react-icons/go";
import { CiHeadphones } from "react-icons/ci";
import { useEffect } from "react";

const NavBar = () =>{

  // useEffect(() => {
  //   const button = document.getElementById('home');

  //   // Add the hover effect class when the component mounts
  //   button?.classList.add('homehover');

  //   // Cleanup function to remove the hover effect class when the component unmounts
  //   return () => {
  //     button?.classList.remove('homehover');
  //   };
  // }, []);


    return (
      <>
      <div className="navContainer">
        <ul className="navbar">
          <li><a className="section flex" href="#welcome-page">
              <CiHome className="Picon"  id="home"/>  <span>Home</span></a>
          </li>
  
          <li><a className="section flex" href="#about-me">
            <GoPerson className="Picon"/> <span>About</span></a>
          </li>
  
          <li><a className="section flex" href="#skills">
            <GiSkills className="Picon"/> <span>Skills</span></a>
          </li>
  
          <li><a className="section flex" href="#projects">
            <GoProjectRoadmap className="Picon"/> <span>Work</span></a>
          </li>
          
          <li><a className="section flex  hidden-Icon" href="#contact">
            <CiHeadphones className="Picon"/>  <span>Contact</span></a>
          </li>
        </ul>
      </div>
      </>
    );
  }

export default NavBar;