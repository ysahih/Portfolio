import Image from "next/image";
import { CiHome } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { GiSkills } from "react-icons/gi";
import { GoProjectRoadmap } from "react-icons/go";
import { CiHeadphones } from "react-icons/ci";
import { useContext, useEffect } from "react";
import RenderContext from "../Contexts/rendre";

const NavBar = () =>{

  const render = useContext(RenderContext)


    return (
      <>
      <div className="navContainer">
        <ul className="navbar">
          <li><a className={`section flex ${render?.render === 'home' ? 'default' : ''}`} onClick={()=>{render?.setRender('home')}} href="#welcome-page">
              <CiHome className="Picon"  id="home"/>  <span>Home</span></a>
          </li>
  
          <li><a className="section flex" onClick={()=>{render?.setRender('about')}} href="#about-me">
            <GoPerson className="Picon"/> <span>About</span></a>
          </li>
  
          <li><a className="section flex" onClick={()=>{render?.setRender('skills')}} href="#skills">
            <GiSkills className="Picon"/> <span>Skills</span></a>
          </li>
  
          <li><a className="section flex" onClick={()=>{render?.setRender('work')}} href="#projects">
            <GoProjectRoadmap className="Picon"/> <span>Work</span></a>
          </li>
          
          <li><a className="section flex  hidden-Icon" onClick={()=>{render?.setRender('connect')}} href="#contact">
            <CiHeadphones className="Picon"/>  <span>Contact</span></a>
          </li>
        </ul>
      </div>
      </>
    );
  }

export default NavBar;