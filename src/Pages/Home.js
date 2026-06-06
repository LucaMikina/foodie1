import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Components/Navbar";
import "../App.css";
import FoodieLogo from "../Components/FoodieLogo";



function Home() {
    const [popularniRestorani] = useState([
        {
            id: 1,
            naziv: "Pizza Maestro",
            slika: "/Slike/slika1.jpg",
            vrsta_kuhinje: "Italijanska kuhinja",
            lokacija: "Centar",
        },
        {
            id: 2,
            naziv: "Burger House",
            slika: "/Slike/slika2.jpeg",
            vrsta_kuhinje: "Američka kuhinja",
            lokacija: "Novi Grad",
        },
    ]);

    useEffect(() => {
        const section = document.querySelector(".how-to-order");
        const onScroll = () => {
            if (window.scrollY > 300 && section) {
                section.classList.add("visible");
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <Navbar />

            <div className="hero-section">
                <div className="container">
                    <div className="row align-items-center hero-row">

                        {/* LIJEVA STRANA */}
                        <div className="col-lg-6 hero-content">

                            <div className="delivery-badge">
                                ⚡ Dostava za 30 minuta ili besplatno!
                            </div>

                            <h1 className="hero-title">
                                Dobrodošli u <br />
                            </h1>

                            <FoodieLogo />

                            <p className="hero-text">
                                Vaša omiljena hrana na klik od vas. Brza dostava,
                                širok izbor restorana i najukusnija jela direktno
                                na vašu adresu.
                            </p>

                            <div className="hero-buttons">
                                <Link to="/register">
                                    <button className="btn hero-btn-primary">
                                        Naruči sada
                                    </button>
                                </Link>

                                <Link to="/login">
                                    <button className="btn hero-btn-secondary">
                                        Saznaj više
                                    </button>
                                </Link>
                            </div>

                        </div>

                        {/* DESNA STRANA */}
                        <div className="col-lg-6 hero-images">

                            <div className="pizza-card">
                                <img
                                    src={require("../Images/slika1hp.jpg")}
                                    alt="Pizza"
                                />
                            </div>

                            <div className="burger-card">
                                <img
                                    src={require("../Images/slika2hp.jpg")}
                                    alt="Burger"
                                />
                            </div>

                            <div className="users-badge">
                                <h2>50k+</h2>
                                <p>Zadovoljnih korisnika</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>


            {/* SEKCIJE ISPOD HERO DIJELA */}
            <section className="how-to-order py-5">
                <div className="text-center mb-4">
                    <h2 className="fw-bold text-red">Kako naručiti?</h2>
                </div>

                <div className="row text-center">
                    <div className="col-md-4">
                        <i className="bi bi-geo-alt-fill icon-orange fs-1"></i>
                        <h5 className="fw-bold mt-3">Recite nam gdje ste</h5>
                        <p>Pokazat ćemo vam restorane u vašoj blizini.</p>
                    </div>

                    <div className="col-md-4">
                        <i className="bi bi-bag-fill icon-orange fs-1"></i>
                        <h5 className="fw-bold mt-3">Pronađite što želite</h5>
                        <p>Pretražite jela, restorane ili kuhinje.</p>
                    </div>

                    <div className="col-md-4">
                        <i className="bi bi-check-circle-fill icon-orange fs-1"></i>
                        <h5 className="fw-bold mt-3">Naručite dostavu ili preuzimanje</h5>
                        <p>Pratit ćemo status vaše narudžbe.</p>
                    </div>
                </div>
            </section>

            <section className="recommended-restaurants py-5">
                <div className="text-center mb-4">
                    <h2>
                        Preporučeni <span className="text-danger">Restorani</span>
                    </h2>
                </div>

                <div className="row justify-content-center">
                    {popularniRestorani.map((restoran) => (
                        <div key={restoran.id} className="col-md-5 col-lg-4 mb-4">
                            <div className="card shadow-sm border-0">
                                <img
                                    src={restoran.slika}
                                    className="card-img-top"
                                    alt={restoran.naziv}
                                    style={{
                                        borderRadius: "15px 15px 0 0",
                                        objectFit: "cover",
                                        height: "250px",
                                    }}
                                />

                                <div className="card-body">
                                    <h5 className="card-title fw-bold">{restoran.naziv}</h5>
                                    <p className="text-muted mb-1">{restoran.vrsta_kuhinje}</p>
                                    <p className="text-secondary mb-0">
                                        <i className="bi bi-geo-alt"></i> {restoran.lokacija}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

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
                                <li><Link to="/restaurants">Restorani</Link></li>
                                <li><Link to="/about">O nama</Link></li>
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
        </>
    );
}

export default Home;
