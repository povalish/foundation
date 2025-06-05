export class Queue<T> {
  private data: T[];

  constructor(init?: T[]) {
    this.data = init || [];
  }

  public enqueue(value: T): void {
    this.data.push(value);
  }

  public dequeue(): T | null {
    if (this.data.length === 0) {
      return null;
    }

    return this.data.shift()!;
  }

  public top(): T | null {
    if (this.data.length === 0) {
      return null;
    }

    return this.data[0];
  }
}
