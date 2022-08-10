import React, { useEffect } from 'react';

import Header from "./components/Header/Header";
import SkillsSection from "./components/SkillsSection/Skills";
import PortfolioSection from "./components/PortfolioSection/PortfolioSection";
import { Emitter } from "./utils/emitter";
import Menu from "./components/Menu/Menu";
import Experience from "./components/Experience/Experience";

window.emitter = new Emitter();

function App() {

  return (
    <>
      <Header/>
      <Menu/>
      <Experience/>
      <SkillsSection/>
      <PortfolioSection/>
    </>
  )
    ;
}

export default App;
