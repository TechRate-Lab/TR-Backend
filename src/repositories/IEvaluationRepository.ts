import { Evaluation } from "../entities/evaluation/evaluation";



export interface IEvaluationRepository {
    save(evaluation: Evaluation): Promise<void>;
    readMyEvaluations(email: string): Promise<Evaluation[]>;   
}