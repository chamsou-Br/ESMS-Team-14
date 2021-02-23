import React from 'react'
import Image1 from '../Images/logo-01.png'
import Image2 from '../Images/MEN-01.png'

const Hero = () => {
    return(
        <div className="home active bdgrid" id="home">
        <div className='container'>
                    <div className='MENDIV'>
                    <img className='MEN' src={Image2} />
                    </div>
                    <div className="homedata center ">
                    <img src={Image1} />
                        <div className="hometitle">
                        <h1 className="texttitle">Welcome to <span className="hometitle-color">AstroHack</span> By CSE</h1>
                        <a href="#" className="button">LUNCH THE ROCKET </a>
                        </div>
                    </div>
          </div>
               
               
        </div>
    )
}

export default Hero