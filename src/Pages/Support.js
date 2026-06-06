import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../App.css";

export default function Pomoc() {

    return (
        <>
            <Navbar />

            <div className="support-page">

                <div className="support-container">

                    <div className="page-header">

                        <i className="bi bi-headset"></i>

                        <h1>
                            Pomoć i <span>Podrška</span>
                        </h1>

                        <p>
                            Tu smo da vam pomognemo
                        </p>

                    </div>

                    <div className="support-card">

                        <h3>
                            <i className="bi bi-question-circle-fill"></i>
                            Često postavljena pitanja
                        </h3>

                        <div className="faq-item">
                            Kako mogu pratiti narudžbu?
                        </div>

                        <div className="faq-item">
                            Kako otkazati narudžbu?
                        </div>

                        <div className="faq-item">
                            Kako promijeniti adresu dostave?
                        </div>

                    </div>

                    <div className="support-card">

                        <h3>
                            <i className="bi bi-envelope-fill"></i>
                            Kontaktirajte nas
                        </h3>

                        <p>📧 support@foodie.ba</p>
                        <p>📞 +387 33 123 456</p>

                    </div>

                </div>

            </div>

            <Footer />
        </>
    );
}