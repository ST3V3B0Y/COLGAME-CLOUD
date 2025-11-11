import axios from "axios";
import type { User } from "../types/auth";

// ✅ URL base de tu backend (usa .env para poder cambiar entre dev y producción)
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

interface LoginResponse {
  user: User;
  token: string;
}

export const loginUser = async (correo: string, contraseña: string): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>(`${API_URL}/users/login`, {
      correo,
      contraseña,
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Captura mensajes personalizados enviados desde tu backend
      throw new Error(error.response?.data?.message || "Error al iniciar sesión");
    }
    throw new Error("Error desconocido al iniciar sesión", error instanceof Error ? { cause: error } : undefined);
  }
};

export const registerUser = async (
  nombre: string,
  correo: string,
  contraseña: string
): Promise<{ message: string }> => {
  try {
    const response = await axios.post(`${API_URL}/users/register`, {
      nombre,
      correo,
      contraseña,
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Error al registrar usuario");
    }
    throw new Error("Error desconocido al registrar usuario", error instanceof Error ? { cause: error } : undefined);
  }
};
