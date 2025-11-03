import express from 'express';
import { getReview, getReviewById, getReviewByGameId, createReview, updateReview, deleteReview } from '../controllers/reviewController.js';
import { validarReview } from '../middleware/validarReviews.js';

const router = express.Router();

// Ruta para obtener todas las reseñas
router.get('/', getReview);

// Ruta para obtener una reseña por ID
router.get('/:id', getReviewById);

// Ruta para obtener una reseña por un juego específico
router.get('/game/:juegoId', getReviewByGameId);

// Ruta para crear una nueva reseña
router.post('/', validarReview, createReview);

// Ruta para actualizar una reseña existente
router.put('/:id', updateReview);

// Ruta para eliminar una reseña
router.delete('/:id', deleteReview);

export default router;
