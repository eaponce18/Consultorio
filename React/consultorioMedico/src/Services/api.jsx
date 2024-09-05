import axios from 'axios';

const API_URL = 'http://localhost:8000'; // Cambia esto por la URL de tu backend

// Función para crear una nueva cita
export const createCita = async (citaData) => {
  const response = await axios.post(`${API_URL}/citas/`, citaData);
  return response.data;
};

// Función para obtener todas las citas
export const getCitas = async () => {
  const response = await axios.get(`${API_URL}/citas/`);
  return response.data;
};

// Función para obtener todos los doctores
export const getDoctores = async () => {
  const response = await axios.get(`${API_URL}/doctores/`);
  return response.data;
};
