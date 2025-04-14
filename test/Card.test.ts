import Card from "../src/Card";

test("Deve criar um cartão", () => {
  const card = new Card({ id: 0, estimative: 666, title: "Atividade 1" });
  expect(card.id).toBe(0);
  expect(card.estimative).toBe(666);
  expect(card.title).toBe("Atividade 1");
});

test("Não deve criar um cartao sem título", () => {
  expect(() => new Card({ id: 0, title: "", estimative: 666 })).toThrow(
    new Error("Title is required")
  );
});
