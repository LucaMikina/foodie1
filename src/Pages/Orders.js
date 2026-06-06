import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../App.css";

export default function MojeNarudzbe() {

    const orders = [
        {
            id: "#1024",
            restaurant: "Burger King",
            total: "18.50 KM",
            status: "Dostavljeno",
            date: "12.06.2025"
        },
        {
            id: "#1025",
            restaurant: "Napoli Pizza",
            total: "24.00 KM",
            status: "Na putu",
            date: "15.06.2025"
        },
        {
            id: "#1026",
            restaurant: "Žeks Doner",
            total: "12.00 KM",
            status: "U pripremi",
            date: "15.06.2025"
        }
    ];

    return (
        <>
            <Navbar />

            <div className="orders-page">

                <div className="orders-container">

                    <div className="page-header">

                        <i className="bi bi-bag-check-fill"></i>

                        <h1>
                            Moje <span>Narudžbe</span>
                        </h1>

                        <p>
                            Pregled svih vaših narudžbi
                        </p>

                    </div>

                    {orders.map(order => (
                        <div className="order-card" key={order.id}>

                            <div className="order-left">

                                <div className="restaurant-icon">
                                    <i className="bi bi-shop"></i>
                                </div>

                                <div>
                                    <h3>{order.restaurant}</h3>
                                    <p>Narudžba {order.id}</p>
                                </div>

                            </div>

                            <div className="order-middle">
                                <strong>{order.total}</strong>
                                <p>{order.date}</p>
                            </div>

                            <div className="order-right">
        <span className="order-status">
            {order.status}
        </span>
                            </div>

                        </div>
                    ))}

                </div>

            </div>

            <Footer />
        </>
    );
}