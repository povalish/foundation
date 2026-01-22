import { Queue } from '@data-structures/Queue';

// Node
//

export type Node<T> = {
  value: T;
  children: Node<T>[];
};

// Graph
//

export class Graph<T> {
  constructor(public nodes: Node<T>[]) {}

  public printBFS(): void {
    const queue = new Queue<Node<T>>();
    const visited = new Map<Node<T>, boolean>();

    this.nodes.forEach((node) => queue.enqueue(node));

    while (queue.size) {
      const node = queue.dequeue()!;

      if (!visited.has(node)) {
        console.log(node.value);
        node.children.forEach((n) => queue.enqueue(n));
        visited.set(node, true);
      }
    }
  }

  public printDFS(): void {
    const print = (nodes: Node<T>[], lvl = 1): void => {
      nodes.forEach((n) => {
        console.log('--'.repeat(lvl), n.value);
        print(n.children, lvl + 1);
      });
    };

    print(this.nodes);
  }
}
