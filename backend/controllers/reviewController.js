import Review from '../models/Review.js';

// Controladores para manejar las operaciones relacionadas con las reseñas

// Obtener todas las reseñas
const getReview = async (req, res) => {
    try {
        const review = await Review.find().populate('juegoId', "titulo genero");
        res.status(200).json(review);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las reseñas", error });
    }
};

// Obtener una reseña por ID
const getReviewById = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id).populate('juegoId', "titulo");
        if (!review) return res.status(404).json({ message: "Reseña no encontrada" });
        res.status(200).json(review);
    } catch (error) {
        res.status(500).json({ message: "Error al buscar la reseña", error });
    }
};

// Crear una nueva reseña
const createReview = async (req, res) => {
    try {
        const newReview = new Review(req.body);
        const savedReview = await newReview.save();
        res.status(201).json(savedReview);
    } catch (error) {
        res.status(500).json({ message: "Error al crear la reseña", error });
    }
}

// Actualizar una reseña existente
const updateReview = async (req, res) => {
    try {
        const updateReview = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updateReview) return res.status(404).json({ message: "Reseña no encontrada" });
        res.status(200).json(updateReview);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar la reseña", error });
    }
};

// Eliminar una reseña
const deleteReview = async (req, res) => {
    try {
        const deletedReview = await Review.findByIdAndDelete(req.params.id);
        if (!deletedReview) return res.status(404).json({ message: "Reseña no encontrada" });
        res.status(200).json({ message: "Reseña eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar la reseña", error });
    }
};

export { getReview, getReviewById, createReview, updateReview, deleteReview };