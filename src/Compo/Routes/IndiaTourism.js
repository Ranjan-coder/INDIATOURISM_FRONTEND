import React from 'react'
import { useNavigate } from 'react-router'

const IndiaTourism = () => {
  const navigate = useNavigate()
  return (
    <>
      <div><img className='indiatourismhi' src='https://media.istockphoto.com/id/511119416/photo/indian-landmark-gadi-sagar-in-rajasthan.jpg?s=612x612&w=0&k=20&c=dO7TbXh3sd6_QmgcF_nYi6ynyIAvPI5STavwzCDyWTI=' alt='indiatourism' /></div>

      <div className='maincontent'>
        <div>
        <h1 className='headingtext'>Tourism Of India</h1>
        <p>India Tourism, <b>Himachal Pradesh, Kerala, Goa, Madhya Pradesh, Gujarat, Maharashtra </b>along with a few
          others are some of the best <b>places to visit</b> in India. With a variety of attractions, these places
          urge you to travel to your heart's content. And, whatever you are going to explore, will surely
          leave a long-lasting impression on you. <b>Beaches, backwaters,</b> vast stretches of <b>deserts</b>, snow-laden
          peaks and Indian <b>wildlife sanctuaries</b> make the country one of the best winter destinations.
          Tourism India during the winter season are perfect ways of bidding farewell to the previous
          year and welcoming the new one excitingly. When the sun starts shining brightly, people
          throng the picturesque hill stations with snow-laden peaks. A perfect escape from the
          scorching heat and soaring temperature can be found only in India.</p>
      </div>
      
      <div className='indiatourism'>
        <div className='tourpackagechildcmp' onClick={()=>navigate('/andhrapradeshtourism')}>
          <img className='indiatourismimg' src='https://i.pinimg.com/564x/7e/5d/c1/7e5dc126c5d74dede622ce80ed6a53b3.jpg' alt='golden triangle tour' />
          <p>Andhra Pradesh Tourism</p>
        </div >
        <div className='tourpackagechildcmp' onClick={()=>navigate('/arunchalapradeshtourism')}>
          <img className='indiatourismimg' src='https://i.pinimg.com/564x/67/31/d9/6731d91f0d9577e13759a8934395a7ff.jpg' alt='rajasthan' />
          <p>Arunachal Pradesh Tourism</p>
        </div>
        <div className='tourpackagechildcmp' onClick={()=>navigate('/asamtourism')}>
          <img className='indiatourismimg' src='https://i.pinimg.com/564x/28/20/f6/2820f6caed44c25a253beaf3ee76c488.jpg' alt='kerala' />
          <p>Asam Tourism</p>
        </div>
        <div className='tourpackagechildcmp' onClick={()=>navigate('/bihartourism')}>
          <img className='indiatourismimg' src='https://i.pinimg.com/564x/e1/d2/59/e1d259f38b7418395454acbec8981dfb.jpg' alt='goa' />
          <p>Bihar Tourism</p>
        </div>
        <div className='tourpackagechildcmp'>
          <img className='indiatourismimg' src='https://i.pinimg.com/564x/2a/20/d1/2a20d147aab2a7afa7ed29562fe571da.jpg' alt='kerala' />
          <p>Goa Tourism</p>
        </div>
        <div className='tourpackagechildcmp'>
          <img className='indiatourismimg' src='https://i.pinimg.com/564x/c5/78/82/c57882660dd200e635def365ae03bd7a.jpg' alt='goa' />
          <p>Odisha Tourism</p>
        </div>
        </div>
      </div>
    </>
  )
}

export default IndiaTourism