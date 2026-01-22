type Node<T> = {
  value: T;
  next: Node<T> | null;
  prev: Node<T> | null;
};

export class LinkedList<T> {
  public length: number = 0;

  private tail: Node<T> | null = null;
  private head: Node<T> | null = null;
  public cursor: Node<T> | null = null;

  constructor() {}

  public pushAtStart(value: T): void {
    const node: Node<T> = { value, next: null, prev: null };

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      this.length += 1;
      return;
    }

    this.tail!.prev = node;
    node.next = this.tail!;
    this.tail = node;

    this.length += 1;
  }

  public popAtStart(): T | null {
    if (!this.tail) return null;

    const value = this.tail.value;

    this.tail = this.tail.next;
    if (this.tail) {
      this.tail.prev = null;
    }

    this.cursor = this.tail;
    this.length -= 1;

    return value;
  }

  public readAtStart(): T | null {
    if (!this.tail) return null;
    return this.tail.value;
  }

  public pushAtEnd(value: T): void {
    const node: Node<T> = { value, next: null, prev: null };

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      this.length += 1;
      return;
    }

    node.prev = this.head!;
    this.head!.next = node;
    this.head = node;

    this.cursor = this.head;
    this.length += 1;
  }

  public popAtEnd(): T | null {
    if (!this.head) return null;

    const value = this.head.value;

    this.head = this.head.prev;
    if (this.head) {
      this.head.next = null;
    }

    this.cursor = this.head;
    this.length -= 1;

    return value;
  }

  public readAtEnd(): T | null {
    if (!this.head) return null;
    return this.head.value;
  }

  public moveCursorAt(index: number): void {
    if (index < 0 || index > this.length - 1) {
      throw new Error(`[LinkedList]: index ${index} not found, max index - ${this.length - 1}`);
    }

    if (!this.tail) return;

    let tail = this.tail;
    let steps = 0;

    while (steps !== index && tail?.next) {
      steps += 1;
      tail = tail.next;
    }

    this.cursor = tail;
  }

  public pushAfter(cursor: Node<T> | null, value: T): void {
    if (!cursor) return;

    const node: Node<T> = { value, next: null, prev: null };

    const curr = this.cursor!;
    const next = this.cursor!.next;

    curr.next = node;
    node.prev = curr;

    if (next) {
      node.next = next;
      next.prev = node;
    }

    this.cursor = node;
    this.length += 1;

    if (cursor === this.head) {
      this.head = node;
    }

    if (cursor === this.tail) {
      this.tail = node;
    }
  }

  public pushBefore(cursor: Node<T> | null, value: T): void {
    if (!cursor) return;

    const node: Node<T> = { value, next: null, prev: null };

    const curr = this.cursor!;
    const prev = this.cursor!.prev;

    node.next = curr;
    curr.prev = node;

    if (prev) {
      prev.next = node;
      node.prev = prev;
    }

    this.cursor = node;
    this.length += 1;

    if (cursor === this.head) {
      this.head = node;
    }

    if (cursor === this.tail) {
      this.tail = node;
    }
  }

  public print(): string {
    if (this.length === 0) return '';

    const log: T[] = [];
    let tail = this.tail;

    while (tail) {
      log.push(tail.value);
      tail = tail.next;
    }

    return log.join(' -> ');
  }
}
