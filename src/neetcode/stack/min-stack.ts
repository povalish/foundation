/**
 * Min Stack
 * https://neetcode.io/problems/minimum-stack/question?list=neetcode150
 *
 * Time Complexity: O(1)
 * Space Complexity: O(N)
 */

class MinStack {
  private minChain: number[] = [Infinity];
  private data: number[] = [];

  constructor() {}

  public push(value: number): void {
    this.data.push(value);

    if (value <= this.minChain[this.minChain.length - 1]) {
      this.minChain.push(value);
    }
  }

  public pop(): void {
    const current = this.data.pop();

    if (current === this.minChain[this.minChain.length - 1]) {
      this.minChain.pop();
    }
  }

  public top(): number {
    return this.data[this.data.length - 1];
  }

  public getMin(): number {
    return this.minChain[this.minChain.length - 1];
  }
}

//
//

describe('Min Stack', () => {
  it('should pass basic tests', () => {
    const minStack = new MinStack();
    minStack.push(1);
    minStack.push(2);
    minStack.push(0);
    expect(minStack.getMin()).toEqual(0);
    minStack.pop();
    expect(minStack.top()).toEqual(2);
    expect(minStack.getMin()).toEqual(1);
  });

  it('should pass my tests 1', () => {
    const minStack = new MinStack();
    minStack.push(0);
    minStack.push(1);
    minStack.push(2);

    expect(minStack.getMin()).toEqual(0);

    minStack.pop();
    minStack.pop();

    expect(minStack.getMin()).toEqual(0);
  });

  it('should pass my tests 2', () => {
    const minStack = new MinStack();
    minStack.push(2);
    minStack.push(1);
    minStack.push(0);

    expect(minStack.getMin()).toEqual(0);

    minStack.pop();
    expect(minStack.getMin()).toEqual(1);

    minStack.pop();
    expect(minStack.getMin()).toEqual(2);
  });

  it('should pass advanced tests 1', () => {
    const minStack = new MinStack();
    minStack.push(-2);
    minStack.push(-2);
    minStack.push(-3);
    minStack.push(-3);

    expect(minStack.getMin()).toEqual(-3);

    minStack.pop();

    expect(minStack.getMin()).toEqual(-3);
  });
});
