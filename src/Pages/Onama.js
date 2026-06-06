import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import {
    FaBullseye,
    FaEye,
    FaHeart,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
} from "react-icons/fa";

import "../App.css";

export default function Onama() {
    return (
        <>
            <Navbar />

            <div className="about-page">

                {/* HEADER */}
                <div className="about-header">
                    <h1>
                        O <span>Foodie</span>
                    </h1>

                    <p>
                        Vaš partner za brzu i pouzdanu dostavu hrane
                    </p>
                </div>

                {/* OPIS */}
                <div className="about-card">
                    <p>
                        Foodie je moderna platforma za dostavu hrane koja povezuje
                        ljude sa najboljim lokalnim restoranima.
                        Osnovani 2024. godine, naš cilj je bio napraviti dostavu
                        hrane bržom, lakšom i pristupačnijom za sve.
                    </p>

                    <p>
                        Sa mrežom od preko 500 restorana i hiljadama zadovoljnih
                        korisnika, ponosni smo što smo postali pouzdan partner
                        kada je u pitanju hrana. Bez obzira da li želite brzi
                        obrok ili posebnu večeru, Foodie vam donosi sve na klik.
                    </p>
                </div>

                {/* MISIJA / VIZIJA / VRIJEDNOSTI */}

                <div className="about-features">

                    <div className="feature-card">
                        <div className="feature-title">
                            <FaBullseye className="icon-red" />
                            <h3>Misija</h3>
                        </div>

                        <p>
                            Pružiti najbolje iskustvo dostave hrane povezujući
                            korisnike sa kvalitetnim restoranima kroz brzu i
                            pouzdanu uslugu.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-title">
                            <FaEye className="icon-yellow" />
                            <h3>Vizija</h3>
                        </div>

                        <p>
                            Postati vodeća platforma za dostavu hrane u regionu,
                            poznata po inovacijama i izvrsnom korisničkom servisu.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-title">
                            <FaHeart className="icon-red" />
                            <h3>Vrijednosti</h3>
                        </div>

                        <p>
                            Kvalitet, brzina, pouzdanost i zadovoljstvo korisnika
                            su temelji našeg poslovanja i vodilja u svemu što
                            radimo.
                        </p>
                    </div>

                </div>

                {/* KONTAKT */}

                <div className="contact-card">

                    <h2>Kontaktirajte nas</h2>

                    <div className="contact-item">
                        <FaEnvelope className="icon-red" />

                        <div>
                            <h4>Email</h4>
                            <p>info@foodie.ba</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <FaPhone className="icon-yellow" />

                        <div>
                            <h4>Telefon</h4>
                            <p>+387 33 123 456</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <FaMapMarkerAlt className="icon-red" />

                        <div>
                            <h4>Adresa</h4>
                            <p>7. maja od Bosne 7, Sarajevo, BiH</p>
                        </div>
                    </div>

                </div>

            </div>

            <Footer />
        </>
    );
}