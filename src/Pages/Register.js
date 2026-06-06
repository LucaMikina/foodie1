import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Register() {
    return (
        <>
            <Navbar />

            <div className="auth-page">

                <div className="auth-card">

                    <div className="register-icon">
                        <i className="bi bi-person-plus-fill"></i>
                    </div>

                    <h1 className="auth-title">
                        Dobrodošli u <span>Foodie</span>
                    </h1>

                    <p className="auth-subtitle">
                        Kreirajte svoj nalog i počnite naručivati
                    </p>

                    <form>

                        <div className="auth-group">
                            <label>Ime i prezime</label>
                            <input
                                type="text"
                                placeholder="Marko Marković"
                            />
                        </div>

                        <div className="auth-group">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="ime@primjer.com"
                            />
                        </div>

                        <div className="auth-group">
                            <label>Lozinka</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                            />
                        </div>

                        <div className="auth-group">
                            <label>Potvrdi lozinku</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                            />
                        </div>

                        <button
                            type="submit"
                            className="auth-btn"
                        >
                            Registruj se
                        </button>

                    </form>

                    <p className="auth-switch">
                        Već imaš nalog?

                        <Link to="/login">
                            Prijavi se
                        </Link>
                    </p>

                </div>

            </div>

            <Footer />
        </>
    );
}

export default Register;
