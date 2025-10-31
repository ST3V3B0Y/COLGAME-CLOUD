import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    titulo: { type: String, requires: true },
    genero: String,
    plataforma: String,
    añoLanzamiento: Number,
    desarrollador: String,
    imagenPortada: String,
    descripcion: String,
    completado: { type: Boolean, default: false },
    fechaCreacion: { type: Date, default: Date.now }
});

const Game = mongoose.model('Game', gameSchema);

export default Game;


