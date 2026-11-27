import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Properties from './pages/Properties';

import UserDashboard from './pages/user/UserDashboard';
import MyBookings from './pages/user/MyBookings';
import MyProfile from './pages/user/MyProfile';

import OwnerDashboard from './pages/owner/OwnerDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';

// Login and Signup
import Login from './auth/login/Login';
import Signup from './auth/signup/Signup';

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

        {/* User Routes */}
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/bookings" element={<MyBookings />} />
        <Route path="/user/profile" element={<MyProfile />} />

        {/* Owner Routes */}
        <Route path="/owner/dashboard" element={<OwnerDashboard />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;