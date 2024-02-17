import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';


const Loginregister = () => {

    const navigate = useNavigate()
    const [showOptions, setShowOptions] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('jwtToken'));

    const handleMouseEnter = () => {
        setShowOptions(true);
    };

    const handleMouseLeave = () => {
        setShowOptions(false);
    };

    const handleLogin =()=>{
        navigate('/login')
    }

    const handleRegister =()=>{
        navigate('/register')
    }

    const handleLogout = () => {
        // Remove JWT token from localStorage
        localStorage.removeItem('jwtToken');
        // Update state to reflect logout
        setIsLoggedIn(false);
        navigate('/login')
        // toast.success('Login/Register')
    };


    return (
        <div className='icon2' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <FontAwesomeIcon className='icon2' icon={faCircleUser} />
            {showOptions && (
                <div className='showbutton'>
                {/* Your login/register options here */}
                <button onClick={handleLogin}  className='loginregisterbutton'>Login</button>
                <button onClick={handleRegister} className='loginregisterbutton'>Register</button>
                <button>{isLoggedIn && (<button className='logout' onClick={handleLogout}>LOGOUT</button>)}</button>
            </div>
            )}
        </div>
    );
};

export default Loginregister;
