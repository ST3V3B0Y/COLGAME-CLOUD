// import express from 'express';
import gameSchema from '../models/Game.js';

const getGames = (req, res) => {
// Lógica para obtener todos los juegos
    res.send('Obtener todos los juegos');
};

const getGameById = (req, res) => {
// Lógica para obtener un juego por ID
    const { id } = req.params;
    res.send(`Obtener juego con ID: ${id}`);
};

const createGame = (req, res) => {
// Lógica para crear un nuevo juego
    res.send('Crear un nuevo juego');
};


const updateGame = (req, res) => {
// Lógica para actualizar un juego existente
    const { id } = req.params;
    res.send(`Actualizar juego con ID: ${id}`);
}

const deleteGame = (req, res) => {
// Lógica para eliminar un juego
    const { id } = req.params;
    res.send(`Eliminar juego con ID: ${id}`);
}

export { getGames, getGameById, createGame, updateGame, deleteGame };