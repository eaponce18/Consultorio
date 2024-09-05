import { useState } from 'react';
import { createCita } from '../Services/api'; // Asegúrate de tener esta función en tu API de servicios.
import './CitaForm.css'; // Crearemos este archivo para los estilos

const CitaForm = () => {
  const [formData, setFormData] = useState({
    estado: '',
    fecha: '',
    hora: '',
    nombre_paciente: '',
    motivo_consulta: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCita(formData);
      setMessage('Cita creada exitosamente');
      // Limpiar el formulario
      setFormData({
        estado: '',
        fecha: '',
        hora: '',
        nombre_paciente: '',
        motivo_consulta: '',
      });
      // Limpiar el mensaje después de 3 segundos
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error creando la cita:', error);
      setMessage('Error al crear la cita. Por favor, intente nuevamente.');
      // Limpiar el mensaje de error después de 3 segundos
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <div>
      {message && <div className="message">{message}</div>}
      <form onSubmit={handleSubmit} className="cita-form">
        <div className="form-group">
          <label htmlFor="estado">Estado</label>
          <input
            type="text"
            id="estado"
            name="estado"
            value={formData.estado}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="fecha">Fecha</label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="hora">Hora</label>
          <input
            type="time"
            id="hora"
            name="hora"
            value={formData.hora}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="nombre_paciente">Nombre del Paciente</label>
          <input
            type="text"
            id="nombre_paciente"
            name="nombre_paciente"
            value={formData.nombre_paciente}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="motivo_consulta">Motivo de Consulta</label>
          <textarea
            id="motivo_consulta"
            name="motivo_consulta"
            value={formData.motivo_consulta}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Crear Cita</button>
      </form>
    </div>
  );
};

export default CitaForm;
