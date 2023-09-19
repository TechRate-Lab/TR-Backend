import { Request, Response } from "express";
import { ReadEvaluationUseCase } from "./readUseCase";

export class ReadEvaluationController {
    constructor(private readEvaluationUseCase: ReadEvaluationUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { email } = request.body;

        try {
            const readEvaluation = await this.readEvaluationUseCase.execute(email);

            return response.status(201).json(readEvaluation);
        } catch (error: any) {
            return response.status(400).json({ error: error.message });
        }
        
        
    }
}