import React, { useState } from 'react';
import '../../App.css';

export default function SignUp() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        // Here you would handle form submission (e.g., send to server)
        alert('Hvala na prijavi!');
        setForm({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <div className="signup-section">
            <h1 className="signup-title">Pretplati se</h1>
            <form className="signup-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Ime i prezime"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Telefon"
                    value={form.phone}
                    onChange={handleChange}
                />
                <textarea
                    name="message"
                    placeholder="Poruka"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                />
                <button type="submit" className="signup-btn">Pošalji</button>
            </form>
        </div>
    );
}