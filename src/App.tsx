import React  from 'react';

import Header from "./components/Header/Header";
import SkillsSection from "./components/SkillsSection/Skills";
import PortfolioSection from "./components/PortfolioSection/PortfolioSection";

import Menu from "./components/Menu/Menu";
import Experience from "./components/Experience/Experience";

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
