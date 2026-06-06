import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../App.css";

export default function AdminOrders() {

    const orders = [
        {
            id: "#5021",
            customer: "Marko Marić",
            restaurant: "Burger King",
            total: "24.50 KM",
            status: "U pripremi",
            address: "Mostar bb",
            phone: "+387 61 222 333"
        },

        {
            id: "#5022",
            customer: "Ana Kovač",
            restaurant: "Napoli Pizza",
            total: "18.00 KM",
            status: "Na putu",
            address: "Split 12",
            phone: "+387 63 111 555"
        },

        {
            id: "#5023",
            customer: "Ivan Horvat",
            restaurant: "Žeks Doner",
            total: "12.00 KM",
            status: "Dostavljeno",
            address: "Zagreb bb",
            phone: "+387 62 777 999"
        }
    ];

    return (
        <>
            <Navbar />

            <div className="admin-orders-page">

                <div className="admin-orders-container">

                    <div className="page-header">

                        <i className="bi bi-clipboard-data-fill"></i>

                        <h1>
                            Admin <span>Narudžbe</span>
                        </h1>

                        <p>
                            Pregled svih aktivnih narudžbi
                        </p>

                    </div>

                    {orders.map(order => (

                        <div className="admin-order-card" key={order.id}>

                            <div className="admin-order-top">

                                <div>
                                    <h3>{order.restaurant}</h3>

                                    <p>
                                        Narudžba {order.id}
                                    </p>
                                </div>

                                <span className="admin-order-status">
                                    {order.status}
                                </span>

                            </div>

                            <div className="admin-order-info">

                                <div>
                                    <strong>Kupac</strong>
                                    <p>{order.customer}</p>
                                </div>

                                <div>
                                    <strong>Adresa</strong>
                                    <p>{order.address}</p>
                                </div>

                                <div>
                                    <strong>Telefon</strong>
                                    <p>{order.phone}</p>
                                </div>

                                <div>
                                    <strong>Iznos</strong>
                                    <p>{order.total}</p>
                                </div>

                            </div>

                            <div className="admin-order-buttons">

                                <button className="admin-btn-primary">
                                    <i className="bi bi-telephone-fill"></i>
                                    Pozovi
                                </button>

                                <button className="admin-btn-secondary">
                                    <i className="bi bi-truck"></i>
                                    Prati dostavu
                                </button>

                                <button className="admin-btn-success">
                                    <i className="bi bi-check-circle-fill"></i>
                                    Označi završeno
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

            <Footer />
        </>
    );
}