import React from 'react'
import Image from '../Images/cse.jpeg'



const About = () => {
    return(
        <div className="About " id="About">
                <h2 className='grandtitle'>About</h2>
                <div className="container">
                <div className='row'>
                     <div className='aboutView col-12 col-md-6'>
                        <div className="aboutText ">
                            <h2 className="about__subtitle">What is CSE, What is AstroHack</h2>
                            <p className="about__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias accusamus atque.</p>           
                        </div>      
                    </div> 
                    <div className='imageView col-12 col-md-6'>
                        <div className="image">
                            <img src={Image}    alt="" />
                        </div>  
                    </div>                          
                </div>
                </div>
        </div>
    )
}

export default About