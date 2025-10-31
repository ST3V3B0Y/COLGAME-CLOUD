import express from 'express';
import { getReseñas, getReseñaById, createReseña, updateReseña, deleteReseña } from '../controllers/reviewController.js';

const router = express.Router();

// Ruta para obtener todas las reseñas
router.get('/reviews', getReseñas);

// Ruta para obtener una reseña por ID
router.get('/reviews/:id', getReseñaById);

// Ruta para crear una nueva reseña
router.post('/reviews', createReseña);

// Ruta para actualizar una reseña existente
router.put('/reviews/:id', updateReseña);

// Ruta para eliminar una reseña
router.delete('/reviews/:id', deleteReseña);

export default router;
