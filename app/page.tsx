"use client"

import NavBar from "./Components/Navbar";
import Header from "./Components/Header";
import { Toaster } from "react-hot-toast";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import RenderContext from "./Contexts/rendre";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Project from "./Components/Project";

const Work = ()=> {
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
  
  const renderContext = useContext(RenderContext);

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
        <div>
        <NavBar/>
        <Header />
      </div>

      { renderContext?.render === 'home' && <Home/>}
      { renderContext?.render === 'about' && <About/>}
      { renderContext?.render === 'skills' && <Skills/>}
      { renderContext?.render === 'connect' && <Contact/>}
      { renderContext?.render === 'footer' && <Footer/>}
      { renderContext?.render === 'work' && <Project/>}
      </div>}

    </>
  );
}


export default function App() {
  const [render, setRender] = useState('home');
  
  return (
    <>
       <div>
        <Toaster/>
        <RenderContext.Provider value={{render, setRender}}>
          <Body/>
        </RenderContext.Provider>
      </div>
    </>
  );
}
