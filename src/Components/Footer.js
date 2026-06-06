import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css"

function Footer() {
    return (
        <footer className="foodie-footer">
            <div className="container">

                <div className="row">

                    <div className="col-lg-4 mb-4">
                        <h2 className="footer-logo">
                            Foodie
                        </h2>

                        <p className="footer-description">
                            Vaša omiljena hrana na klik od vas.
                        </p>
                    </div>

                    <div className="col-lg-3 col-md-4 mb-4">
                        <h4 className="footer-title">Linkovi</h4>

                        <ul className="footer-links">
                            <li><Link to="/">Početna</Link></li>
                            <li><Link to="/restorani">Restorani</Link></li>
                            <li><Link to="/onama">O nama</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-4 mb-4">
                        <h4 className="footer-title">Podrška</h4>

                        <ul className="footer-links">
                            <li><a href="/">Kontakt</a></li>
                            <li><a href="/">FAQ</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-4 mb-4">
                        <h4 className="footer-title">Pratite nas</h4>

                        <div className="footer-socials">
                            <a href="/" className="social-circle">
                                <i className="bi bi-facebook"></i>
                            </a>

                            <a href="/" className="social-circle">
                                <i className="bi bi-instagram"></i>
                            </a>
                        </div>
                    </div>

                </div>

                <div className="footer-divider"></div>

                <p className="footer-copyright">
                    © 2026 Foodie. Sva prava zadržana.
                </p>

            </div>
        </footer>
    );
}

export default Footer;