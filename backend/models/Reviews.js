import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    juegoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Game', required: true },
    puntuacion: { type: Number, min: 1, max: 5, required: true },
    comentario: String,
    horasJugadas: Number,
    dificultad: { type: String, enum: ['Facil', 'Medio', 'Dificil'] },
    recomendaria: { type: Boolean, default: false },
    fechaCreacion: { type: Date, default: Date.now },
    fechaActualizacion: { type: Date, default: Date.now }
});

const Review = mongoose.model('Review', reviewSchema);

export default Review;