import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Navbar from "../Components/Navbar";

function ResetPassword() {
    return (
        <>
            <Navbar />
            <div className="container-fluid p-0 login-page">
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "90vh" }}>
                    <div className="login-box text-center p-5">
                        <h2 className="mb-4 fw-bold">Obnova lozinke</h2>

                        <form>
                            {/* Zadnja lozinka */}
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Unesite zadnju lozinku koje se sjećate"
                                />
                            </div>

                            {/* Nova lozinka */}
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Nova lozinka"
                                />
                            </div>

                            {/* Ponovite novu lozinku */}
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Ponovite novu lozinku"
                                />
                            </div>

                            <button type="submit" className="btn btn-danger w-100 mb-3">
                                Promijeni lozinku
                            </button>

                            <Link to="/login">
                                <button className="btn btn-outline-danger w-100">
                                    Nazad na prijavu
                                </button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ResetPassword;

