import React from "react";
import Resume from "./resume";
import Projects from './project';
import Contact from './contact';
import Display from "./display";
import Navbar from "../components/navbar";
const Home= () => {
  const isFromHome = true;
  return (
    <>
     <Navbar/>
      <Resume isFromHome={isFromHome}/>
      <Projects isFromHome={isFromHome}/>
      <Contact isFromHome={isFromHome}/>
      <Display />
    </>
  );
};

export default Home;
