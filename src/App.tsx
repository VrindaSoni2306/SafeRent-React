import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

// Main Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Properties from './pages/Properties';
import PropertyDetails from './pages/PropertyDetails';

// Authentication
import Login from './auth/login/Login';
import Signup from './auth/signup/Signup';

// User Pages
import UserDashboard from './pages/user/UserDashboard';
import MyBookings from './pages/user/MyBookings';
import MyProfile from './pages/user/MyProfile';

// Owner Pages
import OwnerDashboard from './pages/owner/OwnerDashboard';
import AddProperty from './pages/owner/AddProperty';
import MyProperties from './pages/owner/MyProperties';
import BookingRequests from './pages/owner/BookingRequests';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageProperties from './pages/admin/ManageProperties';
import ManageUsers from './pages/admin/ManageUsers';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/property/:id" element={<PropertyDetails />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* User Routes */}
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/bookings" element={<MyBookings />} />
        <Route path="/user/profile" element={<MyProfile />} />

        {/* Owner Routes */}
        <Route path="/owner/dashboard" element={<OwnerDashboard />} />
        <Route path="/owner/add-property" element={<AddProperty />} />
        <Route path="/owner/my-properties" element={<MyProperties />} />
        <Route path="/owner/booking-requests" element={<BookingRequests />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
         <Route path="/admin/properties" element={<ManageProperties />} />
        <Route path="/admin/users" element={<ManageUsers />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;