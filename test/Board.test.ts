import Board from "../src/Board";

test("Deve criar um quadro", function () {
  const board = new Board({
    id: 0,
    name: "Projeto 1",
    description: "test 1",
    columns: [],
  });
  expect(board.id).toBe(0);
  expect(board.name).toBe("Projeto 1");
  expect(board.description).toBe("test 1");
  expect(board.columns).toStrictEqual([]);
});
