import { Stack as ArrayStack } from './Stack.array';
import { Stack as LinkedListStack } from './Stack.linked-list';

describe.skip('[performance] Stack', () => {
  test('Stack base on array', () => {
    const startTime = performance.now();
    const startMemory = process.memoryUsage().heapUsed / (1024 * 1024);

    const stack = new ArrayStack<string>();

    for (let i = 0; i < 100_000; i++) {
      stack.push(i.toString());
    }

    const endTime = performance.now();
    const endMemory = process.memoryUsage().heapUsed / (1024 * 1024);

    console.log(`Time - ${(endTime - startTime).toFixed(2)}ms`);
    console.log(`Memory - ${(endMemory - startMemory).toFixed(2)} Mb`);

    // Measure (Mac mini M4)
    // number: time - ~1.8s || space - ~0.8Mb
    // string: time - ~4.5s|| space - 3.8Mb
  });

  test('Stack base on stack', () => {
    const startTime = performance.now();
    const startMemory = process.memoryUsage().heapUsed / (1024 * 1024);

    const stack = new LinkedListStack<string>();

    for (let i = 0; i < 100_000; i++) {
      stack.push(i.toString());
    }

    const endTime = performance.now();
    const endMemory = process.memoryUsage().heapUsed / (1024 * 1024);

    console.log(`Time - ${(endTime - startTime).toFixed(2)}ms`);
    console.log(`Memory - ${(endMemory - startMemory).toFixed(2)} Mb`);

    // Measure (Mac mini M4)
    // number: time - ~4.5s || space - ~4Mb
    // string: time - ~9.5s|| space - 6.8Mb
  });
});
