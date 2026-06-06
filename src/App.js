import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ResetPassword from './Pages/ResetPassword';
import Checkout from './Pages/Checkout';
import Kosarica from './Pages/Kosarica';
import Restaurants from './Pages/Restaurants';
import PracenjeNarudzbe from './Pages/PracenjeNarudzbe';
import ProfilKorisnika from './Pages/ProfilKorisnika';
import EditProfile from "./Pages/EditProfile";
import Orders from './Pages/Orders';
import Support from './Pages/Support';
import Onama from './Pages/Onama';
import AdminOrders from "./Pages/AdminOrders";

// nove stranice
import AddRestaurant from './Pages/AddRestaurent';
import ManageApp from './Pages/ManageApp';
import AddDish from './Pages/AddDish';
import DeliveryDashboard from './Pages/DeliveryDashboard';
import ChefDashboard from './Pages/ChefDashboard';
import GuestInfo from './Pages/GuestInfo';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/kosarica" element={<Kosarica />} />
          <Route path="/restorani" element={<Restaurants />} />
          <Route path="/narudzba" element={<PracenjeNarudzbe />} />
          <Route path="/profil" element={<ProfilKorisnika />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/support" element={<Support />} />
          <Route path="/onama" element={<Onama />} />

          {/* rute po ulogama */}
          <Route path="/add-restaurant" element={<AddRestaurant />} />
          <Route path="/manage-app" element={<ManageApp />} />
          <Route path="/add-dish" element={<AddDish />} />
          <Route path="/delivery-dashboard" element={<DeliveryDashboard />} />
          <Route path="/chef-dashboard" element={<ChefDashboard />} />
          <Route path="/guest-info" element={<GuestInfo />} />
          <Route path="/admin-orders" element={<AdminOrders />} />
        </Routes>
      </Router>
  );
}

export default App;
