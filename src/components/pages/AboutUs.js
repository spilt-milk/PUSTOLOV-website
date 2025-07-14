import React from 'react';
import Footer from '../Footer';
import './AboutUs.css';
import bgVideo from '../../videos/video-1.mp4';

export default function AboutUs() {
  return (
    <div className="aboutus-section">
      <video className="aboutus-bg-video" autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="aboutus-content">
        <h1 className="aboutus-title">O nama</h1>
        <p className="aboutus-text">
          Dobrodošli na našu stranicu! Mi smo tim zaljubljenika u pustolovine, prirodu i istraživanje novih destinacija. Naša misija je inspirirati vas da otkrijete ljepotu svijeta oko sebe i podijelite svoja iskustva s drugima.
        </p>
      </div>
      <div style={{ height: '40px' }}></div>
     <Footer />
    </div>
  );
}