import { useEffect, useState } from 'react';
import { getCitas } from '../Services/api'; // Asegúrate de que esta función esté correctamente implementada en la API.

const CitaList = () => {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    const fetchCitas = async () => {
      try {
        const data = await getCitas(); // Llama a la API para obtener las citas
        setCitas(data);
      } catch (error) {
        console.error('Error fetching citas:', error);
        // Aquí podrías establecer un estado de error para mostrarlo en la UI
      }
    };
    fetchCitas();
  }, []);

  return (
    <div>
      <h1>Lista de Citas</h1>
      <ul>
        {citas.map(cita => (
          <li key={cita.id}>
            {cita.nombre_paciente} - {cita.fecha} {cita.hora}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CitaList;
