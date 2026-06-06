import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../App.css";

export default function ChefOrders() {

    const orders = [
        {
            id: "#5021",
            restaurant: "Burger King",
            items: [
                "2x Cheeseburger",
                "1x Pomfrit",
                "2x Coca Cola"
            ],
            note: "Bez luka",
            time: "15 min",
            status: "Novo"
        },

        {
            id: "#5022",
            restaurant: "Napoli Pizza",
            items: [
                "1x Capricciosa",
                "1x Fanta"
            ],
            note: "Extra sir",
            time: "22 min",
            status: "U pripremi"
        }
    ];

    return (
        <>
            <Navbar />

            <div className="chef-page">

                <div className="chef-container">

                    <div className="page-header">

                        <i className="bi bi-fire"></i>

                        <h1>
                            Kuhinja <span>Narudžbe</span>
                        </h1>

                        <p>
                            Aktivne narudžbe za pripremu
                        </p>

                    </div>

                    <div className="chef-orders-grid">

                        {orders.map((order) => (

                            <div
                                className="chef-order-card"
                                key={order.id}
                            >

                                <div className="chef-order-top">

                                    <div>

                                        <h3>
                                            {order.restaurant}
                                        </h3>

                                        <p>
                                            Narudžba {order.id}
                                        </p>

                                    </div>

                                    <span className="chef-status">
                                        {order.status}
                                    </span>

                                </div>

                                <div className="chef-items">

                                    {order.items.map((item, index) => (

                                        <div
                                            className="chef-item"
                                            key={index}
                                        >
                                            🍔 {item}
                                        </div>

                                    ))}

                                </div>

                                <div className="chef-note">

                                    <strong>
                                        Napomena:
                                    </strong>

                                    <p>
                                        {order.note}
                                    </p>

                                </div>

                                <div className="chef-bottom">

                                    <div className="chef-time">
                                        <i className="bi bi-clock-fill"></i>
                                        {order.time}
                                    </div>

                                    <div className="chef-buttons">

                                        <button className="chef-btn-primary">
                                            Prihvati
                                        </button>

                                        <button className="chef-btn-success">
                                            Gotovo
                                        </button>

                                    </div>

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
