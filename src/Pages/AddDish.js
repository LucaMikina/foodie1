import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../App.css";

export default function RestaurantOwner() {

    const [meals, setMeals] = useState([
        {
            id: 1,
            name: "Cheeseburger",
            price: "12 KM",
            image: "/Slike/burger.png"
        },

        {
            id: 2,
            name: "Pizza Capricciosa",
            price: "16 KM",
            image: "/Slike/pizza.png"
        }
    ]);

    const [mealName, setMealName] = useState("");
    const [mealPrice, setMealPrice] = useState("");
    const [mealImage, setMealImage] = useState("");

    const addMeal = (e) => {

        e.preventDefault();

        if (!mealName || !mealPrice) return;

        const newMeal = {
            id: Date.now(),
            name: mealName,
            price: mealPrice,
            image: mealImage || "/Slike/burger.png"
        };

        setMeals([...meals, newMeal]);

        setMealName("");
        setMealPrice("");
        setMealImage("");
    };

    const deleteMeal = (id) => {
        setMeals(
            meals.filter((meal) => meal.id !== id)
        );
    };

    return (
        <>
            <Navbar />

            <div className="owner-page">

                <div className="owner-container">

                    {/* HEADER */}

                    <div className="owner-hero">

                        <img
                            src="/Slike/pizza.png"
                            alt="Restaurant"
                        />

                        <div className="owner-overlay">

                            <h1>
                                Burger King
                            </h1>

                            <p>
                                Upravljanje restoranom
                            </p>

                        </div>

                    </div>

                    {/* DODAJ JELO */}

                    <div className="owner-form-card">

                        <h2>
                            Dodaj novo jelo
                        </h2>

                        <form onSubmit={addMeal}>

                            <div className="owner-form-grid">

                                <input
                                    type="text"
                                    placeholder="Naziv jela"
                                    value={mealName}
                                    onChange={(e) =>
                                        setMealName(e.target.value)
                                    }
                                />

                                <input
                                    type="text"
                                    placeholder="Cijena"
                                    value={mealPrice}
                                    onChange={(e) =>
                                        setMealPrice(e.target.value)
                                    }
                                />

                                <input
                                    type="text"
                                    placeholder="Slika jela"
                                    value={mealImage}
                                    onChange={(e) =>
                                        setMealImage(e.target.value)
                                    }
                                />

                            </div>

                            <button
                                type="submit"
                                className="owner-main-btn"
                            >
                                <i className="bi bi-plus-circle-fill"></i>
                                Dodaj jelo
                            </button>

                        </form>

                    </div>

                    {/* LISTA JELA */}

                    <div className="owner-meals-grid">

                        {meals.map((meal) => (

                            <div
                                className="owner-meal-card"
                                key={meal.id}
                            >

                                <img
                                    src={meal.image}
                                    alt={meal.name}
                                />

                                <div className="owner-meal-content">

                                    <h3>
                                        {meal.name}
                                    </h3>

                                    <p>
                                        {meal.price}
                                    </p>

                                    <div className="owner-meal-buttons">

                                        <button className="edit-btn">
                                            <i className="bi bi-pencil-fill"></i>
                                            Uredi
                                        </button>

                                        <button
                                            className="delete-btn"
                                            onClick={() =>
                                                deleteMeal(meal.id)
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
