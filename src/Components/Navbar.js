import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";

function Navbar() {
    // Simulacija prijave (kasnije zamijeni s pravom autentikacijom)
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg bg-light shadow-sm">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/">
                    <span className="logo-red">Fo</span>
                    <span className="logo-yellow">o</span>
                    <span className="logo-red">die</span>
                </Link>


                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/restorani">Restorani</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/onama">O nama</Link>
                        </li>

                        {/* 🔽 Dropdown izbornik */}
                        <li className="nav-item dropdown">
                            <button
                                className="btn nav-link dropdown-toggle"
                                id="userMenu"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="bi bi-person"></i>
                            </button>

                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userMenu">
                                <li><Link className="dropdown-item" to="/profil">Moj profil</Link></li>
                                <li><Link className="dropdown-item text-dark text-decoration-none" to="/orders">Narudžbe</Link></li>
                                <li><Link to="/support" className="dropdown-item text-dark text-decoration-none">
                                    Pomoć i podrška
                                </Link> </li>

                                <li><Link className="dropdown-item" to="/jezik">Jezik</Link></li>
                                <li><hr className="dropdown-divider" /></li>

                                {/* Dinamički prikaz prijave/odjave */}
                                {isLoggedIn ? (
                                    <li>
                                        <button
                                            className="dropdown-item text-danger"
                                            onClick={() => setIsLoggedIn(false)}
                                        >
                                            Odjava
                                        </button>
                                    </li>
                                ) : (
                                    <li>
                                        <Link className="dropdown-item text-success" to="/login">
                                            Prijava
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
