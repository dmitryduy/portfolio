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
      <div className='container'>
        <Header/>
        <About/>
        <SkillsSection/>
        <PortfolioSection/>
      </div>
    </>
  )
    ;
}

export default App;
