import { useState } from 'react';
import { coursesData } from '../data/coursesData';
import CourseCard from '../CourseCard/CourseCard.jsx';
import './AllCourses.css';

function AllCourses() {
  const [selectedNivel, setSelectedNivel] = useState('');
  const [priceRange, setPriceRange] = useState([0, 500]);

  // Filtrar cursos según los filtros seleccionados
  const cursosFiltrados = coursesData.filter(curso => {
    const nivelMatch = selectedNivel === '' || curso.nivel === selectedNivel;
    const priceMatch = curso.precio >= priceRange[0] && curso.precio <= priceRange[1];
    return nivelMatch && priceMatch;
  });

  // Manejar cambio de dificultad
  const handleNivelChange = (e) => {
    setSelectedNivel(e.target.value);
  };

  // Manejar cambio de rango de precio
  const handlePriceChange = (e) => {
    setPriceRange([0, parseInt(e.target.value)]);
  };

  return (
    <main className="all-courses-main">
      <h2>Todos los cursos</h2>

      <div className="courses-container">
        {/* Sidebar de filtros */}
        <aside className="filters-sidebar">
          <h3>Filtros</h3>

          {/* Filtro de Dificultad */}
          <div className="filter-group">
            <label className="filter-label">Dificultad:</label>
            <select value={selectedNivel} onChange={handleNivelChange}>
              <option value="">Todos</option>
              <option value="Básico">Básico</option>
              <option value="Intermedio">Intermedio</option>
              <option value="Avanzado">Avanzado</option>
            </select>
          </div>

          {/* Filtro de Precio */}
          <div className="filter-group">
            <label className="filter-label">Precio máximo: S/{priceRange[1]}</label>
            <input
              type="range"
              min="0"
              max="500"
              value={priceRange[1]}
              onChange={handlePriceChange}
              className="price-slider"
            />
            <div className="price-range-display">
              S/0 - S/{priceRange[1]}
            </div>
          </div>

          {/* Botón para limpiar filtros */}
          <button
            className="btn-clear-filters"
            onClick={() => {
              setSelectedNivel('');
              setPriceRange([0, 500]);
            }}
          >
            Limpiar filtros
          </button>
        </aside>

        {/* Grid de cursos */}
        <section className="courses-grid">
          {cursosFiltrados.length > 0 ? (
            <div className="contenedor_cursos">
              {cursosFiltrados.map(curso => (
                <CourseCard key={curso.id} curso={curso} />
              ))}
            </div>
          ) : (
            <p className="no-results">No se encontraron cursos con los filtros seleccionados.</p>
          )}
        </section>
      </div>
    </main>
  );
}

export default AllCourses;