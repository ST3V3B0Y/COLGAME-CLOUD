import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET || "temp_secretkey";

export const validarToken = (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1];
    // Verificar si el token existe
    
    if (!token) {
        return res.status(401).json({ message: "Acceso denegado. Token no proporcionado." });
    }

    try {
        const verified = jwt.verify(token, JWT_SECRET);
        req.user = verified; // Agregar la información del usuario al objeto de la solicitud
        next();
    } catch (error) {
        console.error('Error completo:', error);
        res.status(400).json({
            message: "Token inválido",
            error: error.message,
            details: error
        });
    }
};

// Middleware para validar si el usuario es administrador

// export const validarAdmin = (req, res, next) => {
//     if (req.user && req.user.role === 'admin') {
//         next();
//     } else {
//         return res.status(403).json({ message: "Acceso denegado. Se requieren privilegios de administrador." });
//     }
// };