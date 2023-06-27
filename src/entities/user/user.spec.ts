import { expect, test } from "vitest";
import { User } from "./user";



test("criar usuário", () => {
  const user = new User({
    name: "Fulano",
    email: "fulanosilva@gmail.com",
    password: "123",
    confirmPassword: "123",
  });

  expect(user).toBeInstanceOf(User);

  expect(user.name).toBe("Fulano");
  expect(user.email).toBe("fulanosilva@gmail.com");
  expect(user.password).toEqual(user.confirmPassword);
});
