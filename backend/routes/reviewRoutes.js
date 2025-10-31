import express from 'express';
import { getReview, getReviewById, createReview, updateReview, deleteReview } from '../controllers/reviewController.js';

const router = express.Router();

// Ruta para obtener todas las reseñas
router.get('/', getReview);

// Ruta para obtener una reseña por ID
router.get('/:id', getReviewById);

// Ruta para crear una nueva reseña
router.post('/', createReview);

// Ruta para actualizar una reseña existente
router.put('/:id', updateReview);

// Ruta para eliminar una reseña
router.delete('/:id', deleteReview);

export default router;
