import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ validUsers, setCurrentUser }) {
  const navigate = useNavigate();

  // Navegación
  const goToRegister = () => {
    navigate('/register');
  };
  const goToLogin = () => {
    navigate('/');
  };

  // Estados para el formulario
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginState, setLoginState] = useState('');

  // Función para clic en login
  const handleSubmit = (e) => {
    e.preventDefault(); // evita recargar la página

    // Buscar usuario válido
    const user = validUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      // Guarda usuario en el estado currentUser
      setCurrentUser(user);
      setLoginState(`✅ Bienvenido, ${user.nombre}.`);
    } else {
      setLoginState('❌ Usuario o contraseña inválido');
    }
  };

  return (
    <main className="main_login_register poppins-regular">
      <div className="main_login_register centered_form_main_div">
        <h2 className="poppins-bold">Inicia sesión</h2>

        <form id="login_form" className="login_register_form" onSubmit={handleSubmit}>
          <label htmlFor="username">Usuario:</label><br />
          <input
            type="text"
            id="login_username"
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Contraseña:</label><br />
          <input
            type="password"
            id="login_password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <br />
          <button type="submit">Ingresar</button>
        </form>

        <p id="login_state">{loginState}</p>

        <p>
          ¿No tienes cuenta? <a onClick={goToRegister}>Regístrate</a>
        </p>
      </div>
    </main>
  );
}

export default Login;
