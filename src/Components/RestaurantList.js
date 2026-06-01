import React from "react";
import RestaurantCard from "./RestaurantCard";

export default function RestaurantList({ restaurants }) {
    return (
        <div className="container">
            <div className="row justify-content-center">
                {restaurants.map((r) => (
                    <RestaurantCard key={r.id} restaurant={r} />
                ))}
            </div>
        </div>
    );
}
