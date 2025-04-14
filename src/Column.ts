import Card, { CardSnapshot } from "./Card";

export type ColumnSnapshot = {
  id: number;
  name: string;
  countTime: boolean;
  cards: CardSnapshot[];
};

export default class Column {
  id: number;
  name: string;
  countTime: boolean;
  cards: Card[];
  constructor(c: ColumnSnapshot) {
    this.id = c.id;
    this.name = c.name;
    this.countTime = c.countTime;
    this.cards = c.cards.map((c) => new Card(c));
  }
  addCard(c: Card) {
    this.cards.push(c);
  }

  get estimative() {
    if (this.countTime === true) {
      return this.cards
        .map((c) => c.estimative)
        .reduce((acc, curr) => acc + curr, 0);
    }
  }
}
