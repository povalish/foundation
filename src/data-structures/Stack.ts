export class Stack<T> {
  private data: T[] = [];
  public size: number = 0;

  constructor() {}

  public push(element: T): void {
    this.data.push(element);
    this.size += 1;
  }

  public pop(): T | null {
    if (this.size === 0) return null;
    this.size -= 1;

    return this.data.pop() || null;
  }

  public top(): T | null {
    return this.data[this.data.length - 1] || null;
  }
}

//
//

export class StackBaseOnQueue<T> {
  private queue: T[] = [];

  constructor() {}

  public push(value: T): void {
    this.queue.unshift(value);
  }

  public pop(): T | null {
    if (this.queue.length === 0) {
      return null;
    }

    const newQueue = [];
    while (this.queue.length) {
      const firstInQueue = this.queue.pop()!;

      if (this.queue.length !== 0) {
        newQueue.unshift(firstInQueue);
      }

      if (this.queue.length === 0) {
        this.queue = newQueue;
        return firstInQueue;
      }
    }

    return null;
  }

  public top(): T | null {
    if (this.queue.length === 0) {
      return null;
    }

    const newQueue = [];
    while (this.queue.length) {
      const firstInQueue = this.queue.pop()!;
      newQueue.unshift(firstInQueue);

      if (this.queue.length === 0) {
        this.queue = newQueue;
        return firstInQueue;
      }
    }

    return null;
  }

  public empty(): boolean {
    return this.queue.length === 0;
  }
}
