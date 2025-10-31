import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import gameRoutes from "./routes/gameRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/games", gameRoutes);
app.use("/api/reviews", reviewRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conectado a la base de datos MongoDB Atlas"))
  .catch((error) => console.error("❌ Error al conectar a la base de datos:", error));
  
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en el puerto ${PORT}`));

// app.get('/', (req, res) => {
//   res.send('Bienvenido al servidor CGC');
// });

// app.get('/login/:nombre-:apellido', (req, res) => {
//   const { nombre = string, apellido = string } = req.params;
//   function Nombre(nombre) {
//     return nombre.charAt(0).toLocaleUpperCase() + nombre.slice(1).toLocaleLowerCase();
//   }
//   function Apellido(apellido) {
//     return apellido.charAt(0).toLocaleUpperCase() + apellido.slice(1).toLocaleLowerCase();
//   }
//   res.send(`Hola ${Nombre(nombre)} ${Apellido(apellido)} \n Bienvenido al sistema CGC`);
// });

// app.listen(3000, () => {
//     console.log('Servidor escuchando en http://localhost:3000');
// });

