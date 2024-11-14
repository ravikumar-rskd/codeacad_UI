import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    // const [menuOpen,setMenuOpen]=useState(false);
    const navigate =useNavigate();

    const handleHomeClick = () => {
        navigate('/'); // Navigate to the LearningPage route
    };

    return (
        <div className="header">
            <h1>CodeAcad</h1>
            <nav className="header-nav">
            <a onClick={handleHomeClick} style={{ cursor: 'pointer' }}>My Home</a>
                {/* <a >Catalog </a>
                <a >Resources </a>
                <a >Pricing </a>
                <a >Career Center</a>
                <a >For Business</a> */}
            </nav>
            <div className="header-icons">
                <span className="icon">🔍</span> {/* Search icon */}
                <span className="icon">🔔</span> {/* Notification icon */}
                <img className="profile" onClick={() => setShowDropdown(!showDropdown)} src="" alt="Profile" /> {/* Placeholder profile */}
                {showDropdown && (
                    <div className="dropdown">
                        <ul>
                            <li>Profile</li>
                            <li>Account + Billing</li>
                            <li>My Home</li>
                            <li>Help Center</li>
                            <li>Log Out</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
