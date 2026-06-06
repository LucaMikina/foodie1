import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import FoodFilter from "../Components/FoodFilter";
import RestaurantList from "../Components/RestaurantList";
import Footer from "../Components/Footer";
import "../App.css";


export default function Restaurants() {
    const [filter, setFilter] = useState("Fast food");

    const allRestaurants = [
        { id: 1, name: "Burger King", category: "Burger", rating: 98, image: "/Slike/burger.png", description: "Hot Chili Lover" },
        { id: 2, name: "Napoli Pizza", category: "Pizza", rating: 95, image: "/Slike/pizza.png", description: "Authentic Italian taste" },
        { id: 3, name: "HotDog Bros", category: "Hot-dog", rating: 92, image: "/Slike/hot-dog.png", description: "Classic American style" },
        { id: 4, name: "Žeks Doner", category: "Kebab", rating: 97, image: "/Slike/kebab.png", description: "Fresh and spicy" },
    ];

    const filtered =
        filter === "Fast food"
            ? allRestaurants
            : allRestaurants.filter((r) => r.category === filter);

    return (
        <>
            <Navbar />

            <div className="restaurants-page">

                <div className="restaurants-header">
                    <h1>
                        Istražite <span>Restorane</span>
                    </h1>

                    <p>
                        Pronađite svoju omiljenu hranu iz najboljih restorana
                    </p>
                </div>

                <FoodFilter
                    selected={filter}
                    onSelect={setFilter}
                />

                <RestaurantList restaurants={filtered} />

            </div>

            <Footer />
        </>
    );
}
