import Column, { ColumnSnapshot } from "./Column";

export type BoardSnapshot = {
  id: number;
  name: string;
  description: string;
  columns: ColumnSnapshot[];
};

export default class Board {
  id: number;
  name: string;
  description: string;
  columns: Column[];
  constructor(b: BoardSnapshot) {
    this.id = b.id;
    this.name = b.name;
    this.description = b.description;
    this.columns = b.columns.map((c) => new Column(c));
  }

  addColumn(c: Column) {
    this.columns.push(c);
  }
}
