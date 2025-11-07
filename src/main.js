import express from 'express';
import userRouter from './routers/user.router.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api/users', userRouter);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'CRUD API funcionando correctamente' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});