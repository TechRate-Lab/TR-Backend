import { Request, Response } from "express";
import { LoginUseCase } from "./loginUseCase";

export class CreateLoginController {
    constructor(
        private useCaseLogin: LoginUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        
        const { email, password } = request.body;

        try {
            const token = await this.useCaseLogin.execute({ email, password });

            return response.status(201).json({ "msg": "Usuário Logado", "token": token });
            
        } catch (error: any) {

            return response.status(400).json({ error: error.message });
            
        }
    }
}