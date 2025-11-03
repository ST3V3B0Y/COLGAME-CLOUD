import express from 'express';
import { registerUser, loginUser } from '../controllers/userController.js';
import { body } from 'express-validator';
import User from '../models/User.js';

const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post('/register', 
    [
        body('nombre').notEmpty().withMessage('El nombre es requerido').isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres'),
        body('correo').notEmpty().withMessage('El correo electrónico es requerido').isEmail().withMessage('Ingrese un correo electrónico válido'),
        body('contraseña').notEmpty().withMessage('La contraseña es requerida').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres') // .isStrongPassword().withMessage('La contraseña debe ser más fuerte') // Validación de contraseña fuerte
    ],
    registerUser
);

// Ruta para el login del usuario

router.post('/login',
    [
        body('correo').notEmpty().withMessage('El correo electrónico es requerido').isEmail().withMessage('Ingrese un correo electrónico válido'),
        body('contraseña').notEmpty().withMessage('La contraseña es requerida')
    ],
    loginUser
);



export default router;