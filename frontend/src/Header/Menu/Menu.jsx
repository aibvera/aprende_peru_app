import { useNavigate } from 'react-router-dom';
import './Menu.css';

function Menu({ isOpen, onClose, currentUser, setCurrentUser }) {
  const navigate = useNavigate();

  // Navegación
  const goToHome = () => {
    navigate('/');
    onClose();
  };

  const goToCursos = () => {
    navigate('/cursos');
    onClose();
  };

  const goToRegister = () => {
    navigate('/register');
    onClose(); // cierra el menú
  };
  const goToLogin = () => {
    navigate('/login');
    onClose();
  };

  // Cierre de sesión
  const handleLogout = (e) => {
    e.preventDefault();
    setCurrentUser(null);
    goToLogin();
    onClose();
  };

  return (
    <div
      className={`poppins-regular overlay ${isOpen ? 'open' : ''}`}
      id="overlay"
      onClick={onClose}
    >
      <div
        className="side-menu"
        id="side-menu"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>

        {currentUser ? (
          <>
            <p>Bienvenido, {currentUser.nombre}.</p>
            {/*<a href="index.html">Cursos</a>*/}
            <a onClick={goToCursos}>Cursos</a>
            <a onClick={handleLogout}>
              Cerrar sesión
            </a>
          </>
        ) : (
          <>
            {/*<a href="index.html">Cursos</a>*/}
            <a onClick={goToCursos}>Cursos</a>
            <a onClick={goToLogin}>Inicia sesión</a>
            <a onClick={goToRegister}>Regístrate</a>
          </>
        )}
      </div>
    </div>
  );
}

export default Menu;
