import express from 'express';
import * as userService from '../routes/userService';
import { PasswordProvider } from "../providers/implementation/PasswordProvider";
import { prisma } from "../routes/userService";


export const router = express.Router();

router.post('/createUser', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const response = await prisma.usuarios.findUnique({
            where: {
                email: email
            }
        })
        if (response) {
            return res.status(409).json({"msg": "Email já cadastrado!"});
        }         
        const passwordProvider = new PasswordProvider()
        const passwordHash = await passwordProvider.hash(password)
        const user = await userService.createUser(name, email, passwordHash);
        res.status(201).json({"msg": "Usuário criado com sucesso!"});
    } catch (error) {        
        console.error(error);
        res.status(500).json({"msg": "Ocorreu um erro ao criar o usuário"});
    }
});

export default router;
