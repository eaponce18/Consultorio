import './App.css'; // Mantén el archivo CSS para los estilos generales.
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CitaForm from './components/CitaForm'; // Importa el formulario de creación de citas
import CitaList from './components/CitaList'; // Importa la lista de citas
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <h1>Sistema de Citas Médicas</h1>
        </header>

        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/new-cita">Nueva Cita</Link></li>
            <li><Link to="/citas">Ver Citas</Link></li>
            {/* Agrega más opciones según necesites */}
            {/* <li><Link to="/consultas">Consultas</Link></li> */}
            {/* <li><Link to="/doctores">Doctores</Link></li> */}
          </ul>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-cita" element={<CitaForm />} />
            <Route path="/citas" element={<CitaList />} />
            {/* Agrega más rutas según necesites */}
            {/* <Route path="/consultas" element={<ConsultaList />} /> */}
            {/* <Route path="/doctores" element={<DoctorList />} /> */}
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
