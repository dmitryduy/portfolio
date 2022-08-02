import React from 'react';

import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import SkillsSection from "./components/SkillsSection/Skills";

function App() {
  return (
    <>
      <Navigation/>
      <Header/>
      <div className='container'>
        <SkillsSection/>
      </div>
    </>
  )
    ;
}

export default App;
