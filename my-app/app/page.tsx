"use client"

import Image from "next/image";
import { CiHome } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { GiSkills } from "react-icons/gi";
import { GoProjectRoadmap } from "react-icons/go";
import { CiHeadphones } from "react-icons/ci";
import { useEffect } from "react";
import Home from "./Components/Home";
import Header from "./Components/Header";
// import WebFont from 'webfontloader';




const About = ()=> {
  return(
    <section></section>
  );
}

const Skills = ()=> {
  return(
    <section></section>
  );
}

const Work = ()=> {
  return(
    <section></section>
  );
}

const Contact = ()=> {
  return(
    <section></section>
  );
}
const NavBar = () =>{
//   //loading fonts
  // useEffect(() => {
  //   WebFont.load({
  //     google: {
  //       families: ['Droid Sans', 'Chilanka']
  //     }
  //   });
  //  }, []);
 
  return (
    <>
    <div className="navContainer">
      <ul className="navbar">
        <li><a className="section flex" href="#welcome-page">
            <CiHome className="Picon"/>  <span>Home</span></a>
        </li>

        <li><a className="section flex" href="#about">
          <GoPerson className="Picon"/> <span>About</span></a>
        </li>

        <li><a className="section flex" href="#skills">
          <GiSkills className="Picon"/> <span>Skills</span></a>
        </li>

        <li><a className="section flex" href="#projects">
          <GoProjectRoadmap className="Picon"/> <span>Work</span></a>
        </li>
        
        <li><a className="section flex" href="#contact">
          <CiHeadphones className="Picon"/>  <span>Contact</span></a>
        </li>
      </ul>
      {/* <Home/> */}
    </div>
    <Header/>
    </>



  );
}

const Body = ()=>{
  return (
    <NavBar/>
  );
}


export default function App() {
  return (
    <Body/>
  );
}
