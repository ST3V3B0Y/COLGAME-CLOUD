import express from 'express';
import { getGames, getGameById, createGame, updateGame, deleteGame } from '../controllers/gameController.js';

const router = express.Router();

// Ruta para obtener todos los juegos
router.get('/games', getGames);

// Ruta para obtener un juego por ID
router.get('/games/:id', getGameById);

// Ruta para crear un nuevo juego
router.post('/games', createGame);

// Ruta para actualizar un juego existente
router.put('/games/:id', updateGame);

// Ruta para eliminar un juego
router.delete('/games/:id', deleteGame);

export default router;