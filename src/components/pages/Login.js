import React, { useState } from 'react';
import '../../App.css';


export default function Login() {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        alert('Uspješno ste se prijavili!');
        setForm({ email: '', password: '' });
    };

    return (
        <div className="login-bg">
            <div className="login-section">
                <h1 className="login-title">Prijava</h1>
                <form className="login-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Lozinka"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" className="login-btn">Prijavi se</button>
                </form>
            </div>
        </div>
    );
}