import Image from "next/image";

const Home = ()=> {
  return(
    <section></section>
  );
}

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
  return (
    <ul id="navbar">
        <li><a className="" href="#welcome-section">Home</a></li>
        <li><a className="" href="#about">About</a></li>
        <li><a className="" href="#skills">Skills</a></li>
        <li><a className="" href="#projects">Work</a></li>
        <li><a className="" href="#contact">Contact</a></li>
    </ul>
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
