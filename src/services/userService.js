import api from './api';

export const getUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    console.error("Xatolik yuz berdi:", error);
    throw error;
  }
};

export const getUserById = (id) => api.get(`/users/${id}`);