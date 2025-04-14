export type CardSnapshot = {
  id: number;
  title: string;
  estimative: number;
};

export default class Card {
  id: number;
  title: string;
  estimative: number;
  constructor(c: CardSnapshot) {
    if (c.title.length === 0) {
      throw new Error("Title is required");
    }
    this.id = c.id;
    this.title = c.title;
    this.estimative = c.estimative;
  }
  setTitle(title: string) {
    this.title = title;
  }
}
