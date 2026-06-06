import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../App.css";

export default function Profil() {
    return (
        <>
            <Navbar />

            <div className="profile-page">

                <div className="profile-container">

                    {/* HEADER */}

                    <div className="profile-header">

                        <div className="profile-avatar">
                            <i className="bi bi-person-fill"></i>
                        </div>

                        <h1>
                            Moj <span>Profil</span>
                        </h1>

                        <p>luca@gmail.com</p>

                        <button className="edit-profile-btn">
                            Uredi profil
                        </button>

                    </div>

                    {/* STATISTIKE */}

                    <div className="profile-stats">

                        <div className="stat-card">
                            <i className="bi bi-bag-check"></i>
                            <h3>12</h3>
                            <p>Narudžbi</p>
                        </div>

                        <div className="stat-card">
                            <i className="bi bi-heart-fill"></i>
                            <h3>5</h3>
                            <p>Favorita</p>
                        </div>

                        <div className="stat-card">
                            <i className="bi bi-geo-alt-fill"></i>
                            <h3>2</h3>
                            <p>Adrese</p>
                        </div>

                        <div className="stat-card">
                            <i className="bi bi-credit-card-fill"></i>
                            <h3>1</h3>
                            <p>Kartica</p>
                        </div>

                    </div>

                    {/* OSOBNI PODACI */}

                    <div className="profile-card">

                        <h2>Osobni podaci</h2>

                        <div className="profile-form">

                            <input
                                type="text"
                                placeholder="Ime i prezime"
                            />

                            <input
                                type="email"
                                placeholder="Email"
                            />

                            <input
                                type="text"
                                placeholder="Broj telefona"
                            />

                            <input
                                type="text"
                                placeholder="Adresa"
                            />

                        </div>

                        <button className="save-btn">
                            Spremi promjene
                        </button>

                    </div>

                    {/* LOZINKA */}

                    <div className="profile-card">

                        <h2>Promjena lozinke</h2>

                        <div className="profile-form">

                            <input
                                type="password"
                                placeholder="Trenutna lozinka"
                            />

                            <input
                                type="password"
                                placeholder="Nova lozinka"
                            />

                            <input
                                type="password"
                                placeholder="Potvrdi novu lozinku"
                            />

                        </div>

                        <button className="save-btn">
                            Promijeni lozinku
                        </button>

                    </div>

                </div>

            </div>

            <Footer />
        </>
    );
}