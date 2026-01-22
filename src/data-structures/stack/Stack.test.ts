import { Stack as ArrayStack } from './Stack.array';
import { Stack as LinkedListStack } from './Stack.linked-list';

describe('Stack', () => {
  test('Stack based on array', () => {
    const stack = new ArrayStack<number>();

    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);

    expect(stack.length).toEqual(5);
    expect(stack.read()).toEqual(5);

    const popped = stack.pop();
    expect(popped).toEqual(5);
    expect(stack.length).toEqual(4);

    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();

    expect(stack.length).toEqual(0);
    expect(stack.pop()).toEqual(undefined);
  });

  test('Stack based on linked list', () => {
    const stack = new LinkedListStack<number>();

    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);

    expect(stack.length).toEqual(5);
    expect(stack.read()).toEqual(5);

    const popped = stack.pop();
    expect(popped).toEqual(5);
    expect(stack.length).toEqual(4);

    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();

    expect(stack.length).toEqual(0);
    expect(stack.pop()).toEqual(undefined);
  });
});
