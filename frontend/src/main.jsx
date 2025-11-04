import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import Login from './Login/Login.jsx';
import Register from './Register/Register.jsx';
import Home from './Home/Home.jsx';
import AllCourses from './AllCourses/AllCourses.jsx';
import Cart from './Cart/Cart.jsx';

function App() {

  // Estado del usuario logeado (inicialmente null)
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <StrictMode>
      <BrowserRouter>
        <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cursos" element={<AllCourses />} />
          <Route path="/carrito" element={<Cart currentUser={currentUser} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<App />);
