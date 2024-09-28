import './App.css';
import ContactMe from './Components/ContactMe/ConactMe';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import MyProjects from './Components/MyProjects/MyProjects';
import Navbar from './Components/Navbar/Navbar';
import Skills from './Components/Skills/Skills';
import WorkExperience from './Components/WorkExperience/WorkExperience';

const App = ()=> {
  return (
<>
<Navbar/>
<div className='container'>
<Hero/>
<Skills/>
<WorkExperience/>
<MyProjects/>

<ContactMe/>
</div>
<Footer/>
</>

  );
}

export default App;
