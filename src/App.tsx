import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Properties from './pages/Properties';

import UserDashboard from './pages/user/UserDashboard';

// Login and Signup
import Login from './auth/login/Login';
import Signup from './auth/signup/Signup';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/properties" element={<Properties />} />

        {/* User Dashboard */}
        <Route path="/user/dashboard" element={<UserDashboard />} />

        {/* Login and Signup */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;