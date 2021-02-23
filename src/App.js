import NavBar from "./components/Navbar";
import Speakers from './components/Speakers'
import Agenda from "./components/Agenda";
import { useEffect } from "react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import FAQ from './components/FAQ'
import FAQ2 from './components/FAQ2'
import Image1 from './Images/PLANET4-01.png'
import Image2 from './Images/PLANET9-01.png'
import Image3 from './Images/PLANET2-01 (1).png'
import Image4 from './Images/PLANET6-01.png'
import Image5 from './Images/PLANET7-01.png'
import Image6 from './Images/PLANET1-01.png'



function App() {
  console.logt("ESMS")
 window.onscroll = function(){
    const speakers = document.querySelector(".speakers");
    const agenda = document.querySelector('.Agenda');
    const FAQ = document.querySelector('.FAQ');
    const about  = document.querySelector('.About')
    if (window.scrollY >= speakers.offsetTop - 300 ) {
      speakers.classList.add('active')
    }
    if (window.scrollY >= agenda.offsetTop - 300) {
      agenda.classList.add('active')
    }
    if (window.scrollY >= FAQ.offsetTop - 300) {
      FAQ.classList.add('active')
    }
    if (window.scrollY >= about.offsetTop - 300) {
      about.classList.add('active')
    }
    if ( (window.scrollY >= speakers.offsetTop + speakers.scrollHeight) || (window.scrollY <= speakers.offsetTop - 500 ) ) {
      speakers.classList.remove('active')
    }
    if ((window.scrollY >= agenda.offsetTop + agenda.scrollHeight) || (window.scrollY <= agenda.offsetTop - 500 )) {
      agenda.classList.remove('active')
    }
    if ((window.scrollY >= FAQ.offsetTop + FAQ.scrollHeight) || (window.scrollY <= FAQ.offsetTop - 500 )) {
      FAQ.classList.remove('active')
    }
    if ((window.scrollY >= about.offsetTop + about.scrollHeight) || (window.scrollY <= about.offsetTop - 400 )) {
      about.classList.remove('active')
    }
 }


  return (
    <div className="App" >
    <img className='planet1' src={Image1} />
    <img className='planet2' src={Image2} />
    <img className='planet3' src={Image3} />
    <img className='planet4' src={Image4} />
    <img className='planet5' src={Image5} />
    <div className='Absolute'></div>
    <NavBar />
    <Hero />
    <About />
    <Speakers />
    <Agenda /> 
    <FAQ2 />
    <Footer />
    </div>
  );
}

export default App;
