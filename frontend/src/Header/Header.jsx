import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'
import Menu from './Menu/Menu.jsx'

function Header({ currentUser, setCurrentUser }) {

  // Navegación
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };
  const goToRegister = () => {
    navigate('/register');
  };
  const goToLogin = () => {
    navigate('/login');
  };

  // Estado de visibilidad de menú hamburguesa
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => setMenuVisible(!menuVisible);
  const closeMenu = () => setMenuVisible(false);

  return (
    <header>
      <nav>
        <div id="menu-toggle" className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </div>

        <div id="logo" className="poppins-bold" onClick={goToHome} style={{ cursor: 'pointer' }}>AprendePerú</div>

        <div className="auth-buttons" id="auth-buttons">
          {currentUser ? (
            <>
              <p className='poppins-regular'>Bienvenido, {currentUser.nombre}.</p>
            </>
          ) : (
            <>
              <a onClick={goToLogin}><div className="btn-login poppins-regular">Ingresar</div></a>
              <a onClick={goToRegister}><div className="btn-register poppins-regular">Registrarse</div></a>
            </>
          )}
        </div>
      </nav>

      <Menu isOpen={menuVisible} onClose={closeMenu} currentUser={currentUser} setCurrentUser={setCurrentUser} />

    </header>
  )
}

export default Header;
