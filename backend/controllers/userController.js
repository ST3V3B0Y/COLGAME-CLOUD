import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Controladores para manejar las operaciones relacionadas con los usuarios

const JWT_SECRET = process.env.JWT_SECRET || "temp_secretkey";

// Registrar un nuevo usuario
export const registerUser = async (req, res) => {
    try {
        const { nombre, correo, contraseña } = req.body;

        // Validar inexistencia de usuario
        const existingUser = await User.findOne({ correo });
        if (existingUser) {
            return res.status(400).json({ message: "Usuario ya registrado" });
        }

        // Hashear la contraseña
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(contraseña, salt);

        const newUser = new User({
            nombre,
            correo,
            contraseña: hashedPassword
        });

        await newUser.save();

        res.status(201).json({ message: "Usuario registrado exitosamente" });
    } catch (error) {
        console.error('Error completo:', error);
        res.status(500).json({
            message: "Error al registrar el usuario",
            error: error.message,
            details: error
        });
    }
};

// Login del usuario

export const loginUser = async (req, res) => {
    try {
        const { correo, contraseña } = req.body;

        // Verificar si el usuario existe
        const user = await User.findOne({ correo });
        if (!user) {
            return res.status(400).json({ message: "Usuario no encontrado o no creado" });
        }
        
        // Crear y enviar el token JWT
        const token = jwt.sign(
            { userId: user._id, nombre: user.nombre },
            JWT_SECRET,
            { expiresIn: '2h' }
        );
        // Verificar la contraseña
        try {
            const isMatch = await bcrypt.compare(contraseña, user.contraseña);
            if (!isMatch) {
                return res.status(400).json({ message: "Contraseña incorrecta" });
            }
        } catch (error) {
            return res.status(500).json({ message: "Error al verificar la contraseña" });
        }

        res.json({
            message: "Inicio de sesión exitoso",
            token,
            user: {
                id: user._id,
                nombre: user.nombre,
                correo: user.correo
            }
        });
    } catch (error) {
        console.error('Error completo:', error);
        res.status(500).json({
            message: "Error al iniciar sesión",
            error: error.message,
            details: error
        });
    }
};