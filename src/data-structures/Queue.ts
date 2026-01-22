export class Queue<T> {
  private data: T[];

  constructor(init?: T[]) {
    this.data = init || [];
  }

  get size(): number {
    return this.data.length;
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

  public clear(): void {
    this.data = [];
  }
}
