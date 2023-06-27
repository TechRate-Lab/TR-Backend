import { Request, Response } from "express";
import { CreateUserUseCase } from "./usecase";

export class CreateUserController {
  constructor(private useCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    try {
        await this.useCase.execute({
            name,
            email,
            password,
        })

        return response.status(201).send('Usuário criado com sucesso')
    } catch (error:any) {
        const message = error.message || 'Unxpected error.';
        return response.status(error.statusCode ?? 500).json({message})
    }
  }
}
