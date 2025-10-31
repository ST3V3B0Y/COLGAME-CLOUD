import revieSchema from '../models/Reviews.js';

const getReseñas = (req, res) => {
// Lógica para obtener todas las reseñas
    res.send('Obtener todas las reseñas');
}

const getReseñaById = (req, res) => {
// Lógica para obtener una reseña por ID
    const { id } = req.params;
    res.send(`Obtener reseña con ID: ${id}`);
}

const createReseña = (req, res) => {
// Lógica para crear una nueva reseña
    res.send('Crear una nueva reseña');
}

const updateReseña = (req, res) => {
// Lógica para actualizar una reseña existente
    const { id } = req.params;
    res.send(`Actualizar reseña con ID: ${id}`);
}

const deleteReseña = (req, res) => {
// Lógica para eliminar una reseña
    const { id } = req.params;
    res.send(`Eliminar reseña con ID: ${id}`);
}

export { getReseñas, getReseñaById, createReseña, updateReseña, deleteReseña };