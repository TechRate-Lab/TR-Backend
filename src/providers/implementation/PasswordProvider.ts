import * as bcrypt from 'bcrypt'
import { IBcryptProvider } from '../IBcryptProvider'

export class PasswordProvider implements IBcryptProvider {
    async hash(password:string):Promise<string>{
        const salt = await bcrypt.genSalt(10)
        return bcrypt.hash(password, salt)
    }

    async compare(password:string, hash:string):Promise<boolean>{
        const result = await bcrypt.compare(password, hash)
        return result
    }
<<<<<<< HEAD
=======
    
>>>>>>> 8660d66852fae6f6cec68edbead27d1c850f8c8a
}