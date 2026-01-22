import { LinkedList } from '@data-structures/linked-list/LinkedList';

export class Stack<T> {
  private data = new LinkedList<T>();

  constructor() {}

  get length(): number {
    return this.data.length;
  }

  public push(value: T): void {
    this.data.pushAtEnd(value);
  }

  public pop(): T | undefined {
    return this.data.popAtEnd() || undefined;
  }

  public read(): T | undefined {
    return this.data.readAtEnd() || undefined;
  }
}
