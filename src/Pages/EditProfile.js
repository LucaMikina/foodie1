import Navbar from "../Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function EditProfile() {
    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <h2 className="fw-bold mb-4 text-center">Uredi profil</h2>

                <div className="profile-box p-4 mx-auto">
                    <form>
                        <div className="mb-3">
                            <label className="form-label fw-bold">Ime</label>
                            <input type="text" className="form-control" placeholder="Lucija Mikulic" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-bold">Email</label>
                            <input type="email" className="form-control" placeholder="mikuliclucija13@gmail.com" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-bold">Broj telefona</label>
                            <input type="text" className="form-control" placeholder="+38763067505" />
                        </div>

                        <button type="submit" className="btn btn-danger w-100 mt-3">
                            Spremi promjene
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default EditProfile;
