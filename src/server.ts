import { app } from "./app";
import express from 'express';
import { port } from "./config/vars";
import userController from "./controller/userController";

app.use(express.json());
app.use(userController);

app.listen(3000, () => {
  console.log(`\u{1F680} Servidor rodando  na porta ${port}`);
});


