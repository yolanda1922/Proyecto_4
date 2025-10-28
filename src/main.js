import express from "express";
import userRouter from './routers/user.router.js';

const app = express();

app.use(express.json());
app.use(userRouter);

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto  3000");
});
