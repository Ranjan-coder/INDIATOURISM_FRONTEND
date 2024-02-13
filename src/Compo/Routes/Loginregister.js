import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';


const Loginregister = () => {

    const navigate = useNavigate()
    const [showOptions, setShowOptions] = useState(false);

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

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <FontAwesomeIcon className='icon2' icon={faCircleUser} />
            {showOptions && (
                <div className='showbutton'>
                {/* Your login/register options here */}
                <button onClick={handleLogin} >Login</button>
                <button onClick={handleRegister}>Register</button>
            </div>
            )}
        </div>
    );
};

export default Loginregister;
