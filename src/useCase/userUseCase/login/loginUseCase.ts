import { ILoginRepository } from '../../../repositories/implementation/ILoginRepository.js';
import { LoginDTO } from './DTO.js';

export class LoginUseCase {
    constructor(private loginRepository: ILoginRepository) {}

    async execute(data: LoginDTO): Promise<string> {
            const token = await this.loginRepository.login(data.email, data.password);

            return token;
    }
}