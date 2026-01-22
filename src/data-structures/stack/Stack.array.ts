export class Stack<T> {
  private data: T[] = [];

  constructor() {}

  get length(): number {
    return this.data.length;
  }

  public push(value: T): void {
    this.data.push(value);
  }

  public pop(): T | undefined {
    return this.data.pop();
  }

  public read(): T | undefined {
    if (this.length === 0) return undefined;
    return this.data[this.length - 1];
  }
}
