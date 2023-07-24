import { PrismaClient } from '@prisma/client'
export const prisma = new PrismaClient()

export const createUser = async (name: string, email: string, password: string) => {
    const user = await prisma.usuarios.create({
        data: {
            name: name,
            email: email,
            password: password
        }
    })
}