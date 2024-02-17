import React from 'react'
import Loginregister from './Loginregister'



const Topnavbar = () => {

  return (
    <>
    <div className='topnavbarparent'>
        <div className='topnavbarparentimg'>
        <img src='https://www.theindiatourism.com/images/logo.webp' alt='indiatourism'/>
        <img src='https://www.theindiatourism.com/images/atithi-devo-bhava.webp' alt='indiatourism'/>
        </div>
        {/* <div><Loginregister/></div> */}
        <div>
            <div>
                <a href="mailto:info@theindiatourism.com">Email : info@theindiatourism.com</a>
            </div>
            <div>
                <a href="tel:+919549279999"><img src="https://www.theindiatourism.com/images/india.webp" alt="Tourism India" loading="lazy"/> +91-9549279999 </a>
                <div><Loginregister/></div>
            </div>
        </div>
    </div>

    </>
  )
}

export default Topnavbar