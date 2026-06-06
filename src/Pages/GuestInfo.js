import Navbar from "../Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function GuestInfo() {
    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <h2 className="fw-bold mb-4 text-center">
                    <i className="bi bi-info-circle me-2"></i> Gost - Informacije
                </h2>

                <div className="profile-box p-4 mx-auto text-center">
                    <p>Kao gost možete pregledavati restorane i jela, ali morate se registrirati da biste naručili.</p>
                    <button className="btn btn-danger">Registriraj se</button>
                </div>
            </div>
        </>
    );
}

export default GuestInfo;
