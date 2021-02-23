import React , {useState} from 'react'
import {Carousel,CarouselItem} from  'react-bootstrap'
import Image from '../chams.jpg.jpg'
import Image2 from '../Images/astro.jpg'
import Image1 from '../Images/vincentiu-solomon-ln5drpv_ImI-unsplash.jpg'
import { faAngleDown , faAngleUp,faGi} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub,faLinkedin,faGoogle} from '@fortawesome/free-brands-svg-icons'



const Speakers = () => {

    const [index, setIndex] = useState(1);
    const [Activeindex, setActiveIndex] = useState(null);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

   const HandleSlide = () => {
       if (document.querySelectorAll('.infointerne')[index].classList.contains('active')) 
       {
           RemoveActive(index)
       }
       document.querySelectorAll('.indicateurdiv')[index].classList.remove('active');
       const indexNext = (index + 1) % 3  ;
       document.querySelectorAll('.indicateurdiv')[indexNext].classList.add('active');
   }

    const [Active,setActive] = useState(faAngleDown);
    const AddActive = (index) => {
        const infoInterne = document.querySelectorAll('.infointerne')[index];
        infoInterne.classList.add('active');
        setActive(faAngleUp);
    }
    const RemoveActive = (index) => {
        const infoInterne = document.querySelectorAll('.infointerne')[index];
        infoInterne.classList.remove('active');
        infoInterne.classList.add('des');
        setActive(faAngleDown);
        setTimeout(()=> {
            infoInterne.classList.remove('des');
        },1000)
       
    }

  
    return (
    <div className="speakers container" id='speakers'>
    <h2 className='grandtitle'>Speakers</h2>
    <div className='row'>
    <div className='col-12 col-lg-6 '>  
        <Carousel className="carousel" onSlide={()=> HandleSlide()}   indicators={false}  onSlid={(val , drct) => handleSelect(val ,drct) }  interval={2000}   >
            <Carousel.Item >
            <div className='itemDiv'>
                <div className='name'>
                    <h3>Chamseddine</h3>
                </div>
                <div className='infointerne infointern2' >
                     <img src={Image} /> <br/>
                     <div className='infoSpeaker'>
                       <div>
                             <a href="#" ><FontAwesomeIcon className='icon' fontSize={20} icon={faGithub} /></a>
                       </div>
                       <div >
                             <a href="#" ><FontAwesomeIcon className='icon' fontSize={20} icon={faLinkedin}  /></a>
                       </div>
                       <div>
                             <a href="#" ><FontAwesomeIcon className='icon'  fontSize={20} icon={faGoogle}  /></a>
                       </div>
                     </div>
                     <div className="icondiv" onClick={()=> {
                         if (Active == faAngleUp) RemoveActive(index);
                         else AddActive(index)
                     }} >
                     <FontAwesomeIcon className='icon'  fontSize={20} icon={Active}  />
                     </div>     
                </div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className='itemDiv'>
                <div className='name'>
                    <h3>Chamseddine</h3>
                </div>
                <div className='infointerne' >
                     <img src={Image} /><br/>
                     <div className='infoSpeaker'>
                       <div>
                             <a href="#" ><FontAwesomeIcon className='icon'  fontSize={20} icon={faGithub} /></a>
                       </div>
                       <div >
                             <a href="#" ><FontAwesomeIcon className='icon'  fontSize={20} icon={faLinkedin}  /></a>
                       </div>
                       <div>
                             <a href="#" ><FontAwesomeIcon className='icon'  fontSize={20} icon={faGoogle}  /></a>
                       </div>
                     </div>
                     <div className="icondiv" onClick={()=> {
                         if (Active == faAngleUp) RemoveActive(index);
                         else AddActive(index)
                     }} >
                     <FontAwesomeIcon className='icon' fontSize={20} icon={Active}  />
                     </div>     
                </div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className='itemDiv'>
                <div className='name'>
                    <h3>Chamseddine</h3>
                </div>
                <div className='infointerne' >
                     <img src={Image} /><br/>
                     <div className='infoSpeaker'>
                       <div>
                             <a href="#" ><FontAwesomeIcon className='icon'  fontSize={20} icon={faGithub} /></a>
                       </div>
                       <div >
                             <a href="#" ><FontAwesomeIcon className='icon' fontSize={20} icon={faLinkedin}  /></a>
                       </div>
                       <div>
                             <a href="#" ><FontAwesomeIcon className='icon' fontSize={20} icon={faGoogle}  /></a>
                       </div>
                     </div>
                     <div className="icondiv" onClick={()=> {
                         if (Active == faAngleUp) RemoveActive(index);
                         else AddActive(index)
                     }} >
                     <FontAwesomeIcon className='icon'  fontSize={20} icon={Active}  />
                     </div>     
                </div>
            </div>
            </Carousel.Item>
        </Carousel>
       
        </div>
        <Carousel className="col-12 col-lg-6 infoGeneralCarousel" indicators={false}  activeIndex={index}  interval={1000} controls={false}  >
            <Carousel.Item >
            <div className='infoGeneral'> 
                    <h2>Design Workshop</h2>
                    <p>
                        we will See an Introduction to Adobe illustrator and Montion Graphique with <span>Tiouti Mohamed </span>.
                        Student at Higher National School of Computer Science . A membre in Etic club at ESI And master  in Montion Desgine.
                    </p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='infoGeneral'>
                    <h2>Design Workshop</h2>
                    <p>
                        we will See an Introduction to Adobe illustrator and Montion Graphique with <span>Tiouti Mohamed </span>.
                        Student at Higher National School of Computer Science . A membre in Etic club at ESI And master  in Montion Desgine.
                    </p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className='infoGeneral'>
                    <h2>Design Workshop</h2>
                    <p>
                        we will See an Introduction to Adobe illustrator and Montion Graphique with <span>Tiouti Mohamed </span>.
                        Student at Higher National School of Computer Science . A membre in Etic club at ESI And master  in Montion Desgine.
                    </p>
                </div>
            </Carousel.Item>
            <div className='indicateur'>
            <div className='indicateurdiv active' ></div>
            <div className='indicateurdiv'></div>
            <div className='indicateurdiv'></div>
        </div>
        </Carousel>
    
    </div>
   </div>
    );
}


export default Speakers


