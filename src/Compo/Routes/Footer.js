import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faYoutube, faWhatsapp, faPaypal } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (
    <>
      <div>
        <div className='navlink'>
          <NavLink className='navtext' to='/'>HOME</NavLink>
          <NavLink className='navtext' to='/indiatourism'>INDIA TOURISM</NavLink>
          <NavLink className='navtext' to='/tourpackages'>TOUR PACKAGES</NavLink>
          <NavLink className='navtext' to='/placetovisits'>PLACE TO VISITS</NavLink>
          <NavLink className='navtext' to='/touroffers'>TOUR OFFERS</NavLink>
          <NavLink className='navtext' to='/contactus'>CONTACT US</NavLink>
          {/* <NavLink><img className='tripadvisior' src='https://www.theindiatourism.com/images/callBack.webp' alt='tripadvisior'/></NavLink> */}
        </div>
        <div className='footerparent'>
          <div>
          
          <div className="mainfooter">
            <div className="footerheading">The India Tourism</div>
            <div className="addressfooter">
            <FontAwesomeIcon icon={faEnvelope} /><a className="addressfooter1" href="mailto:info@theindiatourism.com">: info@theindiatourism.com</a>
            </div>
          </div>

          <div id='socialicons'>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} style={{ color: '#1DA1F2' }} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} style={{ color: '#3b5998' }} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} style={{ color: '#C13584' }} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} style={{ color: '#FF0000' }} />
            </a>
            <a href="https://wa.me/8249727499" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} style={{ color: '#25D366' }} />
            </a>
            <a href="https://wa.me/8249727499" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faPaypal} style={{ color: '#003087' }} />
            </a>
          </div>
          </div>
          <div className='ftrimg'><img src='https://www.theindiatourism.com/images/India-tour-footer.webp' alt='footerimg' /></div>
        </div>
      </div>
    </>
  )
}

export default Footer