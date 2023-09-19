import { PasswordProvider } from "../../../providers/implementation/PasswordProvider";
import { TokenProvider } from "../../../providers/implementation/TokenProvider";
import { MysqlLoginRepository } from "../../../repositories/implementation/mySqlImplementation/MysqlLoginRepository";
import { CreateLoginController } from "./controller";
import { LoginUseCase } from "./loginUseCase";

const passwordProvider = new PasswordProvider();
const tokenProvider = new TokenProvider();
const mysqlLoginRepository = new MysqlLoginRepository(passwordProvider, tokenProvider);
const loginUseCase = new LoginUseCase(mysqlLoginRepository);
const loginController = new CreateLoginController(loginUseCase);

export { loginController };
