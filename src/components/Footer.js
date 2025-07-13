import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <div className="footer-container">
                <section className="footer-subscription">
                    <p className="footer-subscription-heading">
                        Pridruži nam se, pretplati se na newsletter.
                    </p>
                    <p className="footer-subscription-text">
                        Možete se odjaviti u bilo kojem trenutku.
                    </p>
                    <div className="input-areas">
                        <form>
                            <input type="email" name="email" placeholder="Vaš email" className="footer-input" />
                            <Button buttonStyle="btn--outline">Pretplati se</Button>
                        </form>
                    </div>
                </section>
                <div className="footer-links">
                    <div className="footer-link-wrapper">
                        <div className="footer-link-items">
                            <h2>O nama</h2>
                            <Link to="/aboutus">O nama</Link>
                            <Link to="/sign-up">Kako funkcionira</Link>
                            <Link to="/">Iskustva korisnika</Link>
                            <Link to="/">Karijere</Link>
                            <Link to="/">Investitori</Link>
                            <Link to="/">Uvjeti korištenja</Link>
                        </div>
                        <div className="footer-link-items">
                            <h2>Kontaktirajte nas</h2>
                            <Link to="/contact">Kontakt</Link>
                            <Link to="/">Podrška</Link>
                            <Link to="/">Destinacije</Link>
                            <Link to="/">Sponzorstva</Link>
                        </div>
                    </div>
                    <div className="footer-link-wrapper">
                        <div className="footer-link-items">
                            <h2>Videozapisi</h2>
                            <Link to="/">Pošalji videozapis</Link>
                            <Link to="/">Ambasadori</Link>
                            <Link to="/">Agencija</Link>
                            <Link to="/">Influencer</Link>
                        </div>
                        <div className="footer-link-items">
                            <h2>Društvene mreže</h2>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
                            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">Youtube</a>
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
                        </div>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="fas fa-mountain">
                            PUSTOLOV
                        </Link>
                    </div>
                    <small className="website-rights">PUSTOLOV © 2020</small>
                    <div className="social-icons">
                        <a
                            className="social-icon-link facebook"
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a
                            className="social-icon-link instagram"
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <i className="fab fa-instagram" />
                        </a>
                        <a
                            className="social-icon-link youtube"
                            href="https://www.youtube.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Youtube"
                        >
                            <i className="fab fa-youtube" />
                        </a>
                        <a
                            className="social-icon-link twitter"
                            href="https://twitter.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                        >
                            <i className="fab fa-twitter" />
                        </a>
                        <a
                            className="social-icon-link linkedin"
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;