import { IEvaluationRepository } from "../../../repositories/IEvaluationRepository";
import { readEvaluationDTO } from "./DTO";

export class ReadEvaluationUseCase {
    constructor(private evaluationRepository: IEvaluationRepository) {}

    async execute(email: string) {
        const readEvaluation = await this.evaluationRepository.readMyEvaluations(email);
        return readEvaluation
        
    }
}