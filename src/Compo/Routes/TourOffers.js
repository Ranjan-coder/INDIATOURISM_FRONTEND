import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import axios from 'axios'

const TourOffers = () => {

  const navigate = useNavigate()

  // useEffect(() => {
  //   const jwtToken = localStorage.getItem('jwtToken');
  //   if (!jwtToken) {
  //     navigate('/login');
  //   } else {
  //     axios
  //       .get('http://localhost:5555/user/touroffer', {
  //         headers: {
  //           authorization: `Bearer ${jwtToken}`,
  //         },
  //       })
  //       .then((res) => {
  //         console.log(res.data); 
  //         // alert(responseData.msg);
  //       });
  //   }
  // }, [navigate]);

  return (
    <>
    <div><img className='touroffermainimage' src='https://i.pinimg.com/564x/5d/e7/d7/5de7d713f3febbfca4ee98c36412941d.jpg' alt='indiatourism' /></div>
      <div className='maincontent'>
        <h1 className='headingtext'>India Special Offer Tour Packages</h1>
        <p><b>India Special Offer Tour</b> contains the particularly special experience of India. Such as <b>Luxury Tours,</b>
           Pilgrimage tours for all the religion people, <b>Festival tours</b> of India etc. <b>Do Dham, char Dham,</b>
            Hemkund Saheb, Ponta Saheb, Yamnotri, Gangotri, Kedarnath, Badrinath, Mosque & Dargah tours under 
            Pilgrimage tour. Festivals of North East, <b>Ladakh,</b> Rajasthan etc are very popular among the tourist. 
            We also organize tour for some particular interest like short trekking in the Himalayan region, 
            <b>camel safari</b> in Rajasthan, <b>Honeymoon tours,</b> trout fishing in the still lakes of Himalayan valleys,
             house boat holidays in <b>Kerala</b> or <b>Kashmir</b>, White water rafting on Ganges and other rivers and so on. 
             Create memoirs that last a lifetime by exploring the much admired places of India. We
              tender affordable and attractive India Tour Packages to suit the needs of every tourist.
               Choosing any of these holiday packages will provide you with wholesome experiences that you 
               will love to treasure with your friends in joyful time. India Special Offer Tour contains the 
               particularly special experience of India. Such as Luxury Tours, Pilgrimage tours for all the 
               religion people, Festival tours of India etc. Do Dham, char Dham, Hemkund Saheb, Ponta Saheb, 
               Yamnotri, Gangotri, Kedarnath, Badrinath, Mosque & Dargah tours under Pilgrimage tour. Festivals 
               of North East, Ladakh, Rajasthan etc are very popular among the tourist. We also organize tour for 
               some particular interest like short trekking in the Himalayan region, camel safari in Rajasthan,
                Honeymoon tours, trout fishing in the still lakes of Himalayan valleys, house boat holidays in
                 Kerala or Kashmir, White water rafting on Ganges and other rivers and so on. Create memoirs 
                 that last a lifetime by exploring the much admired places of India. We tender affordable and
                  attractive <b>India Tour Packages</b> to suit the needs of every tourist. Choosing any of these 
                  <b>holiday packages</b> will provide you with wholesome experiences that you will love to treasure
                   with your friends in joyful time.</p>

        <div className='touroffers'>
          <div onClick={()=>navigate('/beachholiday')}>
            <img src='https://i.pinimg.com/564x/03/d0/1c/03d01c496898d13491fe7bcbe9f7ecb1.jpg' alt='golden triangle tour' />
            <p>Beaches Holidays In India</p>
          </div>
          <div onClick={()=>navigate('/goldentriangle')}>
            <img src='https://i.pinimg.com/564x/e1/67/27/e167278e6d06bed5308ba6547b885066.jpg' alt='rajasthan' />
            <p>Golden Triangle India Tour</p>
          </div>
          <div onClick={()=>navigate('/hillstationholiday')}>
            <img src='https://i.pinimg.com/736x/b9/14/b4/b914b4433dcece9a49978fbe02816902.jpg' alt='kerala' />
            <p>Hill Station Holidays</p>
          </div>
          <div onClick={()=>navigate('/honeymoontour')}>
            <img src='https://i.pinimg.com/564x/e5/54/4d/e5544db9f3d5c922060dcc7d07b5ddde.jpg' alt='goa' />
            <p>Honeymoon Packages India</p>
          </div>
          {/* <div>
            <img src='https://i.pinimg.com/564x/ea/f8/0a/eaf80a87879993fb6076b3496a4a9b08.jpg' alt='golden triangle tour' />
            <p>Luxury Holidays Package</p>
          </div>
          <div>
            <img src='https://i.pinimg.com/564x/3e/48/2e/3e482ef90ae5989fdacbfe670dde2e7d.jpg' alt='rajasthan' />
            <p>Pilgrimage Tours In India</p>
          </div>
          <div>
            <img src='https://i.pinimg.com/564x/e9/cf/2d/e9cf2df0e34bd9192e62529483500c54.jpg' alt='kerala' />
            <p>Kerala Holiday Package</p>
          </div>
          <div>
            <img src='https://i.pinimg.com/564x/9c/98/4b/9c984b0184142a1de520359d8a4738b0.jpg' alt='goa' />
            <p>North India Holidays</p>
          </div> */}
        </div>

      </div>
    </>
  )
}

export default TourOffers