import { secret } from "../../config/vars";
import { User } from "../../entities/user/user";
import { ITokenProvider} from "../ITokenProvider";
import jwt from "jsonwebtoken";

export class TokenProvider implements ITokenProvider {
    async generateToken(user: User): Promise<string> {
        const token = jwt.sign({ id: user.email }, secret!, { expiresIn: '7d'});                
        return token           
        
    }
}