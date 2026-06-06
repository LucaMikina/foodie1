import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../App.css";

export default function DeliveryDashboard() {

    const deliveries = [
        {
            id: "#7001",
            restaurant: "Burger King",
            customer: "Marko Marić",
            address: "Kralja Tomislava 12, Mostar",
            phone: "+387 61 222 333",
            total: "24.50 KM",
            status: "Preuzmi"
        },

        {
            id: "#7002",
            restaurant: "Napoli Pizza",
            customer: "Ana Kovač",
            address: "Splitska 8, Čitluk",
            phone: "+387 63 555 888",
            total: "18.00 KM",
            status: "Na putu"
        },

        {
            id: "#7003",
            restaurant: "Žeks Doner",
            customer: "Ivan Horvat",
            address: "Vukovarska 22, Mostar",
            phone: "+387 62 777 111",
            total: "12.00 KM",
            status: "Dostavljeno"
        }
    ];

    return (
        <>
            <Navbar />

            <div className="delivery-page">

                <div className="delivery-container">

                    <div className="page-header">

                        <i className="bi bi-bicycle"></i>

                        <h1>
                            Dostava <span>Narudžbi</span>
                        </h1>

                        <p>
                            Aktivne dostave i adrese kupaca
                        </p>

                    </div>

                    <div className="delivery-grid">

                        {deliveries.map((delivery) => (

                            <div
                                className="delivery-card"
                                key={delivery.id}
                            >

                                <div className="delivery-top">

                                    <div>

                                        <h3>
                                            {delivery.restaurant}
                                        </h3>

                                        <p>
                                            Narudžba {delivery.id}
                                        </p>

                                    </div>

                                    <span className="delivery-status">
                                        {delivery.status}
                                    </span>

                                </div>

                                <div className="delivery-info">

                                    <div className="delivery-info-item">

                                        <i className="bi bi-person-fill"></i>

                                        <div>
                                            <strong>Kupac</strong>
                                            <p>{delivery.customer}</p>
                                        </div>

                                    </div>

                                    <div className="delivery-info-item">

                                        <i className="bi bi-geo-alt-fill"></i>

                                        <div>
                                            <strong>Adresa</strong>
                                            <p>{delivery.address}</p>
                                        </div>

                                    </div>

                                    <div className="delivery-info-item">

                                        <i className="bi bi-telephone-fill"></i>

                                        <div>
                                            <strong>Telefon</strong>
                                            <p>{delivery.phone}</p>
                                        </div>

                                    </div>

                                    <div className="delivery-info-item">

                                        <i className="bi bi-cash-stack"></i>

                                        <div>
                                            <strong>Iznos</strong>
                                            <p>{delivery.total}</p>
                                        </div>

                                    </div>

                                </div>

                                <div className="delivery-buttons">

                                    <button className="delivery-btn-primary">

                                        <i className="bi bi-geo-alt"></i>

                                        Otvori mapu

                                    </button>

                                    <button className="delivery-btn-secondary">

                                        <i className="bi bi-telephone"></i>

                                        Nazovi

                                    </button>

                                    <button className="delivery-btn-success">

                                        <i className="bi bi-check-circle-fill"></i>

                                        Dostavljeno

                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

            <Footer />
        </>
    );
}
