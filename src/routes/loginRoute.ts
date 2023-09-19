import { Router } from "express";
import { loginController } from "../useCase/userUseCase/login/index";

const router = Router()

router.post('/login', (request, response) => {
    return loginController.handle(request, response)
})

export { router as loginRouter };