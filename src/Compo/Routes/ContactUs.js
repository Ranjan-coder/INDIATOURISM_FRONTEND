import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
const ContactUs = () => {
  return (
    <>
      <div><img className='touroffermainimage' src='https://i.pinimg.com/564x/f7/cc/20/f7cc2007ee488d94b39e4af81e376940.jpg' alt='indiatourism' /></div>
      <div className='maincontent'>
        <h1 className='headingtext'>Contact Us</h1>
        <p>Thank you for showing your interest in The India Tourism Tour & Travel services. Please provide the following information about your tour requirements to help us serve you better and route your request to the appropriate person. You should receive a response within 24 hours.</p>
        <div className='contactusdetails'>
          <div>
            <div>
              <div className='tourism'>The India Tourism :</div>
              <div>Prakash Singh Shekhawat</div>
              <div><a href="https://wa.me/9549279999" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} style={{ color: '#25D366' }} />+91 - 9549279999
              </a>
                <div>Office Hours : (9:30 am to 5:30 pm)</div>
                <div><a className="addressfooter1" href="mailto:info@theindiatourism.com"> Email - info@theindiatourism.com</a></div>
              </div>
            </div>
          </div>
            <div>
              <a href='https://www.paypal.com/in/home' target="_blank" rel="noopener noreferrer"><img className='paypalimg' src='https://i.pinimg.com/564x/d9/88/f3/d988f344f245c11c36fe1b3f434b6364.jpg' alt='paypal' /></a>
              </div>

          <div>
            <div className='followustext'>Follow Us </div>
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
          </div>
            <img src='https://www.theindiatourism.com/images/atithi-devo-bhava.png' alt='contactus' />
          </div>
        </div>
        <h1 className='headingtext'>Our Office In Rajasthan</h1>
        <div className='contactusoffice'>
          <div>
            <div>Jaipur Head Office :</div>
            <p>B- 26, Shekhawat colony, Sirsi Road,Jaipur, (Rajasthan)</p>
            <div>
              <a href="https://wa.me/9549279999" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faPhone} /><span className="addressfooter1"> +91 - 9549279999</span>
              </a>
            </div>
            <div>
              <a className="addressfooter1" href="mailto:info@theindiatourism.com">info@theindiatourism.com</a>
            </div>
          </div>
          <div>
            <div>Pushkar Branch Office :</div>
            <p>Motisar Link Road, Behind Pushkar Railway Station,Village Ghanehera, Rajasthan India</p>
          </div>
          <div>
            <div>Jodhpur Office:</div>
            <p>469 mohan nagar B , BJS colony Jodhpur (Rajasthan)</p>
          </div>
          <div>
            <div>Jaisalmer Office:</div>
            <p>Shakti Singh Sam sand dunes, near kanoi village, Jaisalmer (Rajasthan)</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default ContactUs