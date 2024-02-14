import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './Home';
import IndiaTourism from './IndiaTourism';
import TourPackages from './TourPackages';
import PlacetoVisit from './PlacetoVisit';
import TourOffers from './TourOffers';
import ContactUs from './ContactUs';
import Login from './Login';
import Register from './Register';
import GoldenTriangleTourindia from './GoldenTriangleTourindia';
import RajasthanTourPackage from './RajasthanTourPackage';
import KerlaTour from './KerlaTour';
import GoaTour from './GoaTour';
import KeralaTourism from './KeralaTourism';
import Agra from './Agra';

const RouterCompo = () => {
  return (
    <>
    <div className='navlink'>
    <NavLink className='navtext' to='/'>HOME</NavLink>
    <NavLink className='navtext' to='/indiatourism'>INDIA TOURISM</NavLink>
    <NavLink className='navtext' to='/tourpackages'>TOUR PACKAGES</NavLink>
    <NavLink className='navtext' to='/placetovisits'>PLACE TO VISITS</NavLink>
    <NavLink className='navtext' to='/touroffers'>TOUR OFFERS</NavLink>
    <NavLink className='navtext' to='/contactus'>CONTACT US</NavLink>
    <NavLink><img className='tripadvisior' src='https://www.theindiatourism.com/images/callBack.webp' alt='tripadvisior'/></NavLink>
    </div>


    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/indiatourism' element={<IndiaTourism/>}/>
        <Route path='/tourpackages' element={<TourPackages/>}/>
        <Route path='/placetovisits' element={<PlacetoVisit/>}/>
        <Route path='/touroffers' element={<TourOffers/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/goldentriangletour' element={<GoldenTriangleTourindia/>}/>
        <Route path='/rajasthantour' element={<RajasthanTourPackage/>}/>
        <Route path='/kerlatour' element={<KerlaTour/>}/>
        <Route path='/goatour' element={<GoaTour/>}/>
        <Route path='/kerlatourism' element={<KeralaTourism/>}/>
        <Route path='/agra' element={<Agra/>}/>
        

    </Routes>
  
    </>
  )
}

export default RouterCompo