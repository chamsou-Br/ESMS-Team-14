import React from 'react'
import Image1 from '../Images/cse-footer.png'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
    return(
        <div className="Footer" id="Footer">
                <div className="madewithlove">
                        <h4>Made with <FontAwesomeIcon icon={faHeart} color='#c3073f' /> by <img src={Image1} alt=""/></h4>
                </div>
                <div className="copyright">
                        <p>Copyright 2021 Club Scientifique de l'ESI. All Rights Reserved. | Privacy Policy</p>
                </div>
        </div>
    )
}

export default Footer