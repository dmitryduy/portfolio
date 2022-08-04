import React from 'react';

import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import SkillsSection from "./components/SkillsSection/Skills";
import PortfolioSection from "./components/PortfolioSection/PortfolioSection";
import About from "./components/About/About";

function App() {
  return (
    <>
      <Navigation/>
      <Header/>
      <div className='container'>
        <About/>
      </div>
      <SkillsSection/>
      <div className='container'>
        <PortfolioSection/>
      </div>
    </>
  )
    ;
}

export default App;
