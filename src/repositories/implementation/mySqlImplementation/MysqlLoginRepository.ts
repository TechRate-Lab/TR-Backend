
import { PasswordProvider } from './../../../providers/implementation/PasswordProvider';
import { ILoginRepository } from "../ILoginRepository";
import { PrismaClient } from '@prisma/client';
import { TokenProvider } from '../../../providers/implementation/TokenProvider';

export class MysqlLoginRepository implements ILoginRepository {
    constructor(
        private passwordProvider: PasswordProvider,
        private tokenProvider: TokenProvider,
        private prisma = new PrismaClient()        
    ) {}

    async login(email: string, password: string): Promise<string> {
        try {
            const user = await this.prisma.users.findUnique({
                where: {
                    email: email
                }
            })            

            if(!user) {
                throw new Error("Usuário não encontrado")
            }

            if(!await this.passwordProvider.compare(password, user.password)) {
                throw new Error("Senha inválida")
            }           

            const token = this.tokenProvider.generateToken(user)

            return token
        } catch (error: any) {

            throw new Error(error.message)
        }
        

        
    }
        
    }
