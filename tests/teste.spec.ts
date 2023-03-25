import { describe, expect, it } from "vitest";

describe("Teste inicial genérico", () => {
  const stringTeste = ["Teste1", "Teste2"];

  it('verifica se o primeiro elemento é "Teste1"', () => {
    expect(stringTeste[0]).toBe("Teste1");
  });

  it('verifica se o primeiro elemento é "Teste2"', () => {
    expect(stringTeste[1]).toBe("Teste1");
  });
});
