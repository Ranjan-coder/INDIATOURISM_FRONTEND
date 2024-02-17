import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faYoutube, faWhatsapp, faPaypal } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (
    <>
      <div>
        <div className='navlink1'>
          <NavLink className='navtext2' to='/'>Contact Us</NavLink>
          <NavLink className='navtext2' to='/#'>Sitemap</NavLink>
          <NavLink className='navtext2' to='/#'>sitemap xml</NavLink>
          <NavLink className='navtext2' to='/#'>Payment Procedure</NavLink>
          <NavLink className='navtext2' to='/#'>Terms &amp; Condition</NavLink>
          <NavLink className='navtext2' to='/#'>Link exchange</NavLink>
          {/* <NavLink><img className='tripadvisior' src='https://www.theindiatourism.com/images/callBack.webp' alt='tripadvisior'/></NavLink> */}
        </div>
        <div className='footerparent'>
          <div className='footerchild1'>
          
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
          <div ><img className='ftrimg' src='https://www.theindiatourism.com/images/India-tour-footer.webp' alt='footerimg' /></div>
          <div>©️ The India Tourism</div>
        </div>
        
      </div>
    </>
  )
}

export default Footer