import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import SocialLinks from './components/SocialLinks';
// import LeetCodeStats from './components/LeetCodeStats';

function App() {
  return (
    <div className='overflow-hidden dark:bg-black dark:text-white'>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      {/* <LeetCodeStats/> */}
      <Contact/>

      <SocialLinks/>

      <Footer/>
    </div>
  );
}

export default App;
