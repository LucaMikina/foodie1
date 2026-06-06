import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import Footer from "../Components/Footer";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("korisnik"); // default role
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // simulacija prijave: spremi role u localStorage
        localStorage.setItem("role", role);
        localStorage.setItem("email", email);

        // nakon prijave preusmjeri na profil
        navigate("/profil");
    };

    return (
        <>
            <Navbar />

            <div className="auth-page">

                <div className="auth-card">

                    <div className="login-icon">
                        <i className="bi bi-shield-lock"></i>
                    </div>

                    <h1 className="auth-title">
                        Dobrodošli u <span>Foodie</span>
                    </h1>

                    <p className="auth-subtitle">
                        Prijavite se i nastavite naručivati
                    </p>

                    <form onSubmit={handleLogin}>

                        <div className="auth-group">
                            <label>Email ili telefon</label>
                            <input
                                type="text"
                                placeholder="ime@primjer.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="auth-group">
                            <label>Lozinka</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="auth-group">
                            <label>Uloga</label>

                            <select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <option value="admin">Admin</option>
                                <option value="superadmin">Superadmin</option>
                                <option value="korisnik">Korisnik</option>
                                <option value="dostavljac">Dostavljač</option>
                                <option value="restoran">Restoran</option>
                                <option value="kuhar">Kuhar</option>
                                <option value="gost">Gost</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="auth-btn"
                        >
                            Prijavi se
                        </button>

                    </form>

                    <Link
                        to="/reset-password"
                        className="forgot-link"
                    >
                        Zaboravili ste lozinku?
                    </Link>

                    <p className="auth-switch">
                        Nemate račun?

                        <Link to="/register">
                            Registrujte se
                        </Link>
                    </p>

                </div>

            </div>

            <Footer />
        </>
    );
}

export default Login;
