import { Router } from "express";
import { Request, Response } from "express";
import { createEvaluationController } from "../useCase/evaluationUseCase/create/index";
import { readEvaluationController } from "../useCase/evaluationUseCase/read/index";
import { request } from "http";

const router = Router()

router.post('/evaluation', async (request: Request, response: Response) => {
    return createEvaluationController.handle(request, response)
})

router.post('/myEvaluations', async (request: Request, response: Response) => {
    return readEvaluationController.handle(request, response)
})

export { router as evaluationRouter };