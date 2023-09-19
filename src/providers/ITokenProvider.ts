import { User } from "../entities/user/user";

export interface ITokenProvider {
    generateToken(user: User): Promise<string>;
}