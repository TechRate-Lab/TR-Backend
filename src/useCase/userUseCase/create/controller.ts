import { Request, Response } from "express";
import { CreateUserUseCase } from "./usecase";
<<<<<<< HEAD
<<<<<<< HEAD:src/userUseCase/create/controller.ts

export class CreateUserController {
  constructor(private useCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
=======
=======
>>>>>>> 8660d66852fae6f6cec68edbead27d1c850f8c8a
import { VerificationDatabase } from "../../../providers/implementation/verifications/verificationDatabase";


export class CreateUserController {
  constructor(
    private useCase: CreateUserUseCase,    
    private verificationUser: VerificationDatabase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;                
    try {
      const user = {name, email, password}
      const verificationUser = await this.verificationUser.userIsValid(user);    

      await this.useCase.execute({
        name,
        email,
        password
      });

      return response.status(201).json({ msg: "Usuário criado com sucesso!" });

    } catch (error: any) {  
<<<<<<< HEAD
>>>>>>> 8660d66 (fix: correções na classe de avaliação):src/useCase/userUseCase/create/controller.ts

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
=======

      if (error.message === "Usuário já existe") {
        return response.status(409).json({ msg: "Usuário já existe" });
      } else {                
        return response
        .status(400)
        .json({ msg: `${error.message}` });
      }      
>>>>>>> 8660d66852fae6f6cec68edbead27d1c850f8c8a
    }
  }
}
