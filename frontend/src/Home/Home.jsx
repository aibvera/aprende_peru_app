import { coursesData } from '../data/coursesData';
import CourseCard from '../CourseCard/CourseCard';
import './Home.css';

function Home() {
  // Filtrar cursos por sección
  const cursosDestacados = coursesData.filter(curso => curso.seccion === 'solicitados');
  const cursosNuevos = coursesData.filter(curso => curso.seccion === 'nuevos');

  return (
    <main className="Cuerpo">
      {/* Sección Cursos más solicitados */}
      <section>
        <h3>Cursos más solicitados 🔥</h3>
        <div className="contenedor_cursos_home">
          {cursosDestacados.map(curso => (
            <CourseCard key={curso.id} curso={curso} />
          ))}
        </div>
      </section>

      {/* Sección Nuevos cursos */}
      <section>
        <h3>Nuevos cursos ✨</h3>
        <div className="contenedor_cursos_home">
          {cursosNuevos.map(curso => (
            <CourseCard key={curso.id} curso={curso} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
