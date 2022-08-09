import React from 'react';

import Header from "./components/Header/Header";
import SkillsSection from "./components/SkillsSection/Skills";
import PortfolioSection from "./components/PortfolioSection/PortfolioSection";
import About from "./components/About/About";
import { Emitter } from "./utils/emitter";
import Layout from "./components/Layout/Layout";

window.emitter = new Emitter();

function App() {
  return (
    <>
      <Layout/>
        <Header/>
        <About/>
        <SkillsSection/>
        <PortfolioSection/>
    </>
  )
    ;
}

export default App;
