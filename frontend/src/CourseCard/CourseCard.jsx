import { useNavigate } from 'react-router-dom';
import './CourseCard.css';

function CourseCard({ curso }) {
  const navigate = useNavigate();

  const handleVerCurso = () => {
    // Guardar el curso en sessionStorage
    sessionStorage.setItem('carrito', JSON.stringify([curso]));
    // Redirigir al carrito
    navigate('/carrito');
  };

  return (
    <div className="tarjeta-curso">
      <img className="img_curso" src={curso.imagen} alt={`imagen-curso-${curso.nombre}`} />
      <strong className="titulo_curso">{curso.nombre}</strong>

      <div className="detalles_curso">
        <span>Nivel: {curso.nivel}</span>
        <span>Duración: {curso.duracion}</span>
      </div>

      <hr />

      <div className="footer_curso">
        <span>S/{curso.precio}</span>
        <button className="ver-curso button_curso" onClick={handleVerCurso}>
          Ver curso
        </button>
      </div>
    </div>
  );
}

export default CourseCard;