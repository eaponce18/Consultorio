import { useState, useEffect } from 'react';
import { getDoctores } from '../Services/api'; // Asegúrate de crear esta función en tu archivo api.jsx

function Home() {
  const [doctores, setDoctores] = useState([]);

  useEffect(() => {
    const fetchDoctores = async () => {
      try {
        const data = await getDoctores();
        setDoctores(data);
      } catch (error) {
        console.error('Error fetching doctores:', error);
      }
    };
    fetchDoctores();
  }, []);

  return (
    <div>
      <h2>Bienvenido al Sistema de Citas Médicas</h2>
      <h3>Nuestros Médicos:</h3>
      <ul>
        {doctores.map(doctor => (
          <li key={doctor.id}>{doctor.nombre} - {doctor.especialidad}</li>
        ))}
      </ul>
      {/* Alternativamente, puedes mostrar una imagen del centro médico */}
      {/* <img src="/path/to/your/medical-center-image.jpg" alt="Centro Médico" /> */}
    </div>
  );
}

export default Home;
