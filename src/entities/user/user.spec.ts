import { expect, test } from 'vitest';
import { User } from './user';

test("criar usuário", () => {
    const user = new User({
        nome: "Fulano",
        email: "fulanosilva@gmail.com",
        senha: "teste123"
    })

    expect(user).toBeInstanceOf(User);

    expect(user.nome).toBe("Fulano");
    expect(user.email).toBe("fulanosilva@gmail.com");
    expect(user).not.toHaveProperty('senha');
})