import { MysqlEvaluationRepository } from "../../../repositories/implementation/mySqlImplementation/MysqlEvaluationRepository";
import { ReadEvaluationController } from "./controller";
import { ReadEvaluationUseCase } from "./readUseCase";

const evaluationRepository = new MysqlEvaluationRepository();
const readEvalutionUseCase = new ReadEvaluationUseCase(evaluationRepository);
const readEvaluationController = new ReadEvaluationController(readEvalutionUseCase);

export { readEvaluationController };