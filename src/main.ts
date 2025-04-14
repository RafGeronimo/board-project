import Board from "./Board";
import Card from "./Card";
import Column from "./Column";

const board = new Board({
  id: 666,
  name: "myBoard",
  description: "desc",
  columns: [],
});

const cardTodo = new Card({ id: 0, title: "ver aula TS3", estimative: 4 });
const cardDoing = new Card({
  id: 1,
  title: "Fazer parte um do projeto",
  estimative: 0.5,
});
const cardDone = new Card({
  id: 2,
  title: "Criar classes do projeto",
  estimative: 0.25,
});

const todo = new Column({ id: 0, name: "Todo", countTime: true, cards: [] });
todo.addCard(cardTodo);
const doing = new Column({ id: 1, name: "doing", countTime: true, cards: [] });
doing.addCard(cardDoing);
const done = new Column({ id: 2, name: "done", countTime: false, cards: [] });
done.addCard(cardDone);

board.addColumn(todo);
board.addColumn(doing);
board.addColumn(done);

console.log(todo.estimative);
console.log(doing.estimative);
console.log(done.estimative);

console.log(board);
