import { API_BASE_URL } from "./config";

// Función de login
export async function login(username, password) {
  try {

    // Request
    const response = await fetch(`${API_BASE_URL}/seguridad/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    // Recepción de respuesta
    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Error en auth.js/login:", error);
    throw error;
  }
}

// Función de register
export async function register(username, password, first_name, last_name, email) {
  try {
    const response = await fetch(`${API_BASE_URL}/usuarios/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, first_name, last_name, email }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en auth.js/register:", error);
    throw error;
  }
}
