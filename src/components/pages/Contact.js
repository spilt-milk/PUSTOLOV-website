import React from 'react';
import Footer from '../Footer';
import './Contact.css';
import bgVideo from '../../videos/video-1.mp4';

export default function Contact() {
  return (
    <div className="contact-section">
      <video className="contact-bg-video" autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="contact-content">
        <h1 className="contact-title">Kontakt</h1>
        <p className="contact-text">
          Za sva pitanja, prijedloge ili suradnju možete nas kontaktirati putem emaila ili društvenih mreža.<br /><br />
          <strong>Email:</strong> info@pustolov.com<br />
          <strong>Telefon:</strong> +385 99 123 4567<br />
          <strong>Adresa:</strong> Pustolov d.o.o., Ulica Pustolova 1, 10000 Zagreb<br /><br />
          Pratite nas na društvenim mrežama za najnovije vijesti i događanja!
        </p>
      </div>
      <div style={{ height: '40px' }}></div> 
          <Footer />
        </div>
      );
    }