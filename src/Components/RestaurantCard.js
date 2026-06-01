import React from "react";
import "../App.css";

export default function RestaurantCard({ restaurant }) {
    return (
        <div className="col-md-3 col-sm-6 mb-4">
            <div className="card border-0 shadow-sm restaurant-card">
                <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="card-img-top rounded-top"
                />
                <div className="card-body text-center">
                    <h5 className="card-title fw-bold">{restaurant.name}</h5>
                    <p className="text-muted">{restaurant.description}</p>
                    <span className="badge bg-warning text-dark">
            <i className="bi bi-star-fill"></i> {restaurant.rating}
          </span>
                </div>
            </div>
        </div>
    );
}
