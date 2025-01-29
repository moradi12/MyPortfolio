
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './App.css';
import ContactMe from './Components/ContactMe/ConactMe';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import MyProjects from './Components/MyProjects/MyProjects';
import Navbar from './Components/Navbar/Navbar';
import Skills from './Components/Skills/Skills';
import SocialMedia from './Components/SocialMedia/SocialMedia';
import WorkExperience from './Components/WorkExperience/WorkExperience';

const App = () => {
  return (
    <>
      <Navbar />
      <SocialMedia /> {/* Social Media Icons placed here */}
      <div className='container'>
        <Hero />
        <Skills />
        <WorkExperience />
        <MyProjects />
        <ContactMe />
      </div>
      <Footer />
    </>
  );
}

export default App;
