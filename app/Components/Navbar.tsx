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
        <div></div>
        <ul className="navbar">
          <li><a className={`section flex ${render?.render === 'home' ? 'hover' : ''}`} onClick={()=>{render?.setRender('home')}} >
              <CiHome className="Picon"  id="home"/>  <span>Home</span></a>
          </li>
  
          <li><a className={`section flex ${render?.render === 'about' ? 'hover' : ''}`} onClick={()=>{render?.setRender('about')}} >
            <GoPerson className="Picon"/> <span>About</span></a>
          </li>
  
          <li><a className={`section flex ${render?.render === 'skills' ? 'hover' : ''}`} onClick={()=>{render?.setRender('skills')}} >
            <GiSkills className="Picon"/> <span>Skills</span></a>
          </li>
  
          <li><a className={`section flex ${render?.render === 'work' ? 'hover' : ''}`} onClick={()=>{render?.setRender('work')}} >
            <GoProjectRoadmap className="Picon"/> <span>Work</span></a>
          </li>
          
          <li><a className="section flex  hidden-Icon" onClick={()=>{render?.setRender('footer')}} >
            <CiHeadphones className="Picon"/>  <span>Contact</span></a>
          </li>
        </ul>
      </div>
      </>
    );
  }

export default NavBar;