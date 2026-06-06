import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../App.css";

export default function ManageApp() {

    const latestOrders = [
        {
            id: "#5031",
            customer: "Marko Marić",
            restaurant: "Burger King",
            total: "24.50 KM",
            status: "Na putu"
        },

        {
            id: "#5032",
            customer: "Ana Kovač",
            restaurant: "Napoli Pizza",
            total: "18.00 KM",
            status: "U pripremi"
        },

        {
            id: "#5033",
            customer: "Ivan Horvat",
            restaurant: "Žeks Doner",
            total: "12.00 KM",
            status: "Dostavljeno"
        }
    ];

    return (
        <>
            <Navbar />

            <div className="manage-page">

                <div className="manage-container">

                    {/* HEADER */}

                    <div className="page-header">

                        <i className="bi bi-speedometer2"></i>

                        <h1>
                            Superadmin <span>Dashboard</span>
                        </h1>

                        <p>
                            Upravljanje cijelom Foodie aplikacijom
                        </p>

                    </div>

                    {/* STATISTIKE */}

                    <div className="dashboard-stats">

                        <div className="dashboard-card">

                            <i className="bi bi-people-fill"></i>

                            <h2>12,540</h2>

                            <p>Korisnika</p>

                        </div>

                        <div className="dashboard-card">

                            <i className="bi bi-bag-check-fill"></i>

                            <h2>2,340</h2>

                            <p>Narudžbi</p>

                        </div>

                        <div className="dashboard-card">

                            <i className="bi bi-shop"></i>

                            <h2>154</h2>

                            <p>Restorana</p>

                        </div>

                        <div className="dashboard-card">

                            <i className="bi bi-currency-dollar"></i>

                            <h2>48K KM</h2>

                            <p>Prihod</p>

                        </div>

                    </div>

                    {/* AKTIVNOST */}

                    <div className="dashboard-grid">

                        {/* NARUDŽBE */}

                        <div className="dashboard-section">

                            <div className="dashboard-section-header">

                                <h3>
                                    Zadnje narudžbe
                                </h3>

                                <button>
                                    Pogledaj sve
                                </button>

                            </div>

                            {latestOrders.map((order) => (

                                <div
                                    className="mini-order-card"
                                    key={order.id}
                                >

                                    <div>

                                        <strong>
                                            {order.restaurant}
                                        </strong>

                                        <p>
                                            {order.customer}
                                        </p>

                                    </div>

                                    <div>

                                        <strong>
                                            {order.total}
                                        </strong>

                                        <span>
                                            {order.status}
                                        </span>

                                    </div>

                                </div>

                            ))}

                        </div>

                        {/* KORISNICI */}

                        <div className="dashboard-section">

                            <div className="dashboard-section-header">

                                <h3>
                                    Upravljanje korisnicima
                                </h3>

                            </div>

                            <div className="user-manage-item">

                                <div>
                                    <strong>
                                        Marko Marić
                                    </strong>

                                    <p>
                                        korisnik@gmail.com
                                    </p>

                                </div>

                                <button className="ban-btn">
                                    Ban
                                </button>

                            </div>

                            <div className="user-manage-item">

                                <div>
                                    <strong>
                                        Ana Kovač
                                    </strong>

                                    <p>
                                        ana@gmail.com
                                    </p>

                                </div>

                                <button className="ban-btn">
                                    Ban
                                </button>

                            </div>

                            <div className="user-manage-item">

                                <div>
                                    <strong>
                                        Ivan Horvat
                                    </strong>

                                    <p>
                                        ivan@gmail.com
                                    </p>

                                </div>

                                <button className="ban-btn">
                                    Ban
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <Footer />
        </>
    );
}