import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
        window.addEventListener('resize', showButton);
        return () => {
            window.removeEventListener('resize', showButton);
        };
    }, []);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        PUSTOLOV <i className="fas fa-mountain"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                                Usluge
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Prijavi se
                            </Link>
                        </li>
                    </ul>
                    {button && (
                         <Button buttonStyle="btn--outline" buttonSize="btn--medium" to="/login">
                                    Prijava
                         </Button>
                    )}
                </div>
            </nav>
        </>
    );
}

export default Navbar;