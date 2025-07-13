
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function ProductPage() {
    const location = useLocation();
    const { src, text, label } = location.state || {};

    return (
        <div
            className="product-bg"
            style={{
                backgroundImage: `url(${src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <div className="product-content" style={{ background: 'rgba(0,0,0,0.7)', padding: '32px', borderRadius: '12px', maxWidth: '400px', width: '90%' }}>
                <h1 style={{ color: '#fff', marginBottom: '16px' }}>{label}</h1>
                <p style={{ color: '#fff', marginBottom: '24px' }}>{text}</p>
                <form>
                    <input type="text" name="name" placeholder="Ime i prezime" required style={{ marginBottom: '12px', padding: '8px', width: '100%' }} />
                    <input type="email" name="email" placeholder="Email" required style={{ marginBottom: '12px', padding: '8px', width: '100%' }} />
                    <input type="tel" name="phone" placeholder="Telefon" style={{ marginBottom: '12px', padding: '8px', width: '100%' }} />
                    <button type="submit" style={{ padding: '10px 20px', borderRadius: '4px', background: '#fff', color: '#222', border: 'none', cursor: 'pointer' }}>
                        Rezerviraj
                    </button>
                </form>
            </div>
        </div>
    );
}