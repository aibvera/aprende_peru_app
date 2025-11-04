import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { register } from '../api/auth';

function Register() {
  const navigate = useNavigate();

  // Navegación al login
  const goToLogin = () => {
    navigate('/login');
  };

  // Estados para el formulario
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    username: '',
    password: '',
    password_conf: ''
  });

  // Manejar cambios en inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Envío del formulario
  const [statusMsg, setStatusMsg] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar contraseñas
    if (formData.password !== formData.password_conf) {
      setStatusMsg('❌ Las contraseñas no coinciden');
      return;
    }

    // Request
    try {
      const user = await register(formData.username, formData.password, formData.nombre, formData.apellido, formData.correo);
      if (user.username) {
        setStatusMsg('✅ Registro exitoso. Redirigiendo a login...');
      } else {
        setStatusMsg('❌ Campos incorrectos');
        console.log(user);
        return;
      }
    } catch (error) {
      setStatusMsg('❌ Error al conectar con el servidor');
      console.log(error);
      return;
    }

    // Redirigir al login después de 1.5 segundos
    setTimeout(() => {
      goToLogin();
    }, 1500);
  };

  return (
    <main className="poppins-regular main_login_register">
      <div className="main_login_register centered_form_main_div reg_main_div">
        <form id="register_form" className="login_register_form" onSubmit={handleSubmit}>
          <h2>Regístrate</h2>

          <label htmlFor="first_name">Nombre:</label><br />
          <input type="text" id="first_name" name="nombre" value={formData.nombre} onChange={handleChange} required />

          <label htmlFor="last_name">Apellido:</label><br />
          <input type="text" id="last_name" name="apellido" value={formData.apellido} onChange={handleChange} required />

          <label htmlFor="email">Correo:</label><br />
          <input type="text" id="email" name="correo" value={formData.correo} onChange={handleChange} required />

          <label htmlFor="username">Nombre de usuario:</label><br />
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />

          <label htmlFor="password">Contraseña:</label><br />
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />

          <label htmlFor="password_conf">Confirma tu contraseña:</label><br />
          <input type="password" id="password_conf" name="password_conf" value={formData.password_conf} onChange={handleChange} required />

          <br />
          <button type="submit">Registrarse</button>
        </form>

        <p id="register_state">{statusMsg}</p>
        <p>
          ¿Ya tienes cuenta? <a onClick={goToLogin}>Inicia sesión</a>
        </p>
      </div>
    </main>
  );
}

export default Register;
