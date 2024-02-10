import React from 'react'

const Topnavbar = () => {
  return (
    <>
    <div className='topnavbarparent'>
        <div>
        <img src='https://www.theindiatourism.com/images/logo.webp' alt='indiatourism'/>
        <img src='https://www.theindiatourism.com/images/atithi-devo-bhava.webp' alt='indiatourism'/>
        </div>
        <div className=''>
            <div>
                <a href="mailto:info@theindiatourism.com">Email : info@theindiatourism.com</a>
            </div>
            <div>
                <a href="tel:+919549279999"><img src="https://www.theindiatourism.com/images/india.webp" alt="Tourism India" loading="lazy"/> +91-9549279999 </a>
            </div>
        </div>
    </div>

    </>
  )
}

export default Topnavbar