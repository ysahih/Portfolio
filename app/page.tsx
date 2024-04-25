"use client"

import NavBar from "./Components/Navbar";
import Header from "./Components/Header";
import { Toaster } from "react-hot-toast";
import Image from "next/image";
import { useEffect, useState } from "react";
import Home from "./Components/Home";
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

const Land = (props: any)=>{
  return (
    <div className="landing">
      <div className="logoLand">
        <Image
            className={`sahihLogo ${props.logo ? 'show' : ''}`}
            src="/asahih.png"
            width={55}
            height={55}
            alt="ucef"
        />
      </div>
    </div>
  );
}

const Body = ()=>{

  const [landing, setLanding] = useState(true);
  const [logo, setlogo] = useState(false);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLanding(false);
    }, 1000);
    setTimeout(()=>{
      setlogo(true);
    }, 300)
    return () => clearTimeout(timer); // Cleanup function to clear the timer if the component unmounts before the timeout
  });
  
  return (
    <>
      {landing && <Land logo={logo}/>}
      {!landing && <div>
        <NavBar/>
        <Header/>
      </div>}
      {/* <Home/> */}
    </>
  );
}


export default function App() {
  return (
    <>
       <div>
        <Toaster/>
        <Body/>
      </div>
    </>
  );
}
