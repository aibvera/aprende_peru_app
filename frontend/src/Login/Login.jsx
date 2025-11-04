import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { login } from '../api/auth.js';

function Login({ setCurrentUser }) {
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

  // Función para clic en login (con API)
  const handleSubmit = async (e) => {
    e.preventDefault(); // evita recargar la página

    try {
      const data = await login(username, password);
      if (data.user) {
        setCurrentUser(data.user);
        setLoginState(`✅ Bienvenido, ${data.user.nombre}.`);
      } else {
        setLoginState('❌ Usuario o contraseña inválido');
      }
    } catch (error) {
      setLoginState('❌ Error al conectar con el servidor');
      console.log(error);
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
