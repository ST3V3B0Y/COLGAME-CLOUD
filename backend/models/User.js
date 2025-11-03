import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    nombre: { type: String, required: [true, 'Nombre de usuario requerido'], trim: true, unique: true, minlength: [3, 'El nombre de usuario debe tener al menos 3 caracteres'] },
    correo: { type: String, required: [true, 'Correo electrónico requerido'], trim: true, unique: true, match: [/.+\@.+\..+/, 'Por favor ingrese un correo electrónico válido'] },
    contraseña: { type: String, required: [true, 'Contraseña requerida'], minlength: [6, 'La contraseña debe tener al menos 6 caracteres'] },
    fechaRegistro: { type: Date, default: Date.now }
});

export default mongoose.model('User', userSchema);