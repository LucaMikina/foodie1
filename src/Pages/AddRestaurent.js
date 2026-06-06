import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../App.css";

export default function AddRestaurant() {

    const [restaurants, setRestaurants] = useState([
        {
            id: 1,
            name: "Burger King",
            category: "Burger",
            image: "/Slike/burger.png",
            meals: 5
        },

        {
            id: 2,
            name: "Napoli Pizza",
            category: "Pizza",
            image: "/Slike/pizza.png",
            meals: 8
        }
    ]);

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");

    const addRestaurant = (e) => {
        e.preventDefault();

        if (!name || !category) return;

        const newRestaurant = {
            id: Date.now(),
            name,
            category,
            image: image || "/Slike/burger.png",
            meals: 0
        };

        setRestaurants([...restaurants, newRestaurant]);

        setName("");
        setCategory("");
        setImage("");
    };

    const deleteRestaurant = (id) => {
        setRestaurants(
            restaurants.filter((r) => r.id !== id)
        );
    };

    return (
        <>
            <Navbar />

            <div className="superadmin-page">

                <div className="superadmin-container">

                    <div className="page-header">

                        <i className="bi bi-shop-window"></i>

                        <h1>
                            Upravljanje <span>Restoranima</span>
                        </h1>

                        <p>
                            Dodavanje i uređivanje restorana
                        </p>

                    </div>

                    {/* FORMA */}

                    <div className="admin-form-card">

                        <h2>
                            Dodaj restoran
                        </h2>

                        <form onSubmit={addRestaurant}>

                            <div className="admin-form-grid">

                                <input
                                    type="text"
                                    placeholder="Naziv restorana"
                                    value={name}
                                    onChange={(e) =>
                                        setName(e.target.value)
                                    }
                                />

                                <input
                                    type="text"
                                    placeholder="Kategorija"
                                    value={category}
                                    onChange={(e) =>
                                        setCategory(e.target.value)
                                    }
                                />

                                <input
                                    type="text"
                                    placeholder="Putanja slike"
                                    value={image}
                                    onChange={(e) =>
                                        setImage(e.target.value)
                                    }
                                />

                            </div>

                            <button
                                type="submit"
                                className="admin-main-btn"
                            >
                                <i className="bi bi-plus-circle-fill"></i>
                                Dodaj restoran
                            </button>

                        </form>

                    </div>

                    {/* LISTA RESTORANA */}

                    <div className="restaurants-admin-grid">

                        {restaurants.map((restaurant) => (

                            <div
                                className="restaurant-admin-card"
                                key={restaurant.id}
                            >

                                <img
                                    src={restaurant.image}
                                    alt={restaurant.name}
                                />

                                <div className="restaurant-admin-content">

                                    <h3>
                                        {restaurant.name}
                                    </h3>

                                    <p>
                                        {restaurant.category}
                                    </p>

                                    <span>
                                        {restaurant.meals} jela
                                    </span>

                                    <div className="restaurant-admin-buttons">

                                        <button className="edit-btn">
                                            <i className="bi bi-pencil-fill"></i>
                                            Uredi
                                        </button>

                                        <button
                                            className="delete-btn"
                                            onClick={() =>
                                                deleteRestaurant(
                                                    restaurant.id
                                                )
                                            }
                                        >
                                            <i className="bi bi-trash-fill"></i>
                                            Obriši
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