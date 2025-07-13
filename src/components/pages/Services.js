import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import servicesBg from '../../images/img-8.jpg';

export default function Services() {
    return (
        <div
            className="services-section"
            style={{
                backgroundImage: `url(${servicesBg})`
            }}
        >
            <div className="services-content">
                <h1 className="services-title">Usluge</h1>
                <Cards />
            </div>
            <Footer />
        </div>
    );
}