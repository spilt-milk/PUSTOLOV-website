import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './HeroSection.css';
import video1 from '../videos/video-1.mp4';    

function HeroSection() {
    const [showTrailer, setShowTrailer] = useState(false);

    return (
        <div className="hero-container">
            <video src={video1} autoPlay loop muted />
            <h1>Avantura je ovdje</h1>
            <p>Što čekaš?</p>
            <div className="hero-btns">
                <Link to="/services">
                    <button className="btn" buttonStyle='btn--outline' buttonSize='btn--large'>
                        Počni sada
                    </button>
                </Link>
                <button
                    className="btn"
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={() => setShowTrailer(true)}
                >
                    Najava <i className='far fa-play-circle' />
                </button>
            </div>
            {showTrailer && (
                <div className="youtube-modal">
                    <div className="youtube-modal-content">
                        <button className="close-btn" onClick={() => setShowTrailer(false)}>Zatvori</button>
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/4nRaLPs8WxU"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
}

export default HeroSection;