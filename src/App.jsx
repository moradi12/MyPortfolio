import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Skills from './Components/Skills/Skills';
import WorkExperience from './Components/WorkExperience/WorkExperience';
import ContactMe from './Components/ContactMe/ConactMe';
import Footer from './Components/Footer/Footer';

const App = ()=> {
  return (
<>
<Navbar/>
<div className='container'>
<Hero/>
<Skills/>
<WorkExperience/>
<ContactMe/>
</div>
<Footer/>
</>

  );
}

export default App;
