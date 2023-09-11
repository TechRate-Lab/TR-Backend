<<<<<<< HEAD
import { expect, test, it } from "vitest";
import { User } from "./user";

test("criar usuário", () => {
  it("Deve ser possível criar um usuário"),
    async () => {
      const user = new User({
        name: "Fulano",
        email: "fulanosilva@gmail.com",
        password: "123",
      });
      expect(user).toBeInstanceOf(User);

      expect(user.name).toBe("Fulano");
      expect(user.email).toBe("fulanosilva@gmail.com");
    };
=======
import { expect, test, it, beforeEach, describe } from "vitest";
import { User } from "./user";
import { inMemoryUser } from "../../repositories/implementation/inMemory/inMemoryUser";

describe("criar usuário", () => {
    let repository: inMemoryUser;

    beforeEach(() => {
      repository = new inMemoryUser();
    });

    it('Deve ser possível criar um usuário', async () => {
      const user = new User({name:'Luiz',email:'a@a.com', password:'123'})
      await repository.save(user)

      const result = await repository.findAllUsers()
      expect(result.length).toBe(1)
      console.log(result)
      expect(result[0].name).toEqual('Luiz')
    })
  ;
>>>>>>> 8660d66852fae6f6cec68edbead27d1c850f8c8a
});
