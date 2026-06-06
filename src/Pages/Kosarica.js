import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";

function Kosarica() {
    const proizvodi = [];

    return (
        <>
            <Navbar />

            <div className="empty-cart">
                <i className="bi bi-bag cart-icon"></i>

                <h1>Vaša korpa je prazna</h1>

                <p>Dodajte neka ukusna jela da nastavite</p>

                <Link to="/restorani" className="browse-btn">
                    ✨ Pregledaj restorane
                </Link>
            </div>

            <Footer />
        </>
    );
}

export default Kosarica;