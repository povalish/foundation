class MinStack {
  private min: number[] = [];
  private data: number[] = [];

  constructor() {}

  /**
   * @param {number} val
   * @return {void}
   */
  push(val: number): void {
    this.data.push(val);

    if (this.min.length === 0) this.min.push(val);
    else if (this.min[this.min.length - 1] > val) {
      this.min.push(val);
    }
  }

  /**
   * @return {void}
   */
  pop(): void {
    const popped = this.data.pop();
    if (popped === this.min[this.min.length - 1]) this.min.pop();
  }

  /**
   * @return {number}
   */
  top(): number {
    if (this.data.length === 0) throw new Error('Stack is empty.');
    return this.data.pop()!;
  }

  /**
   * @return {number}
   */
  getMin(): number {
    if (this.data.length === 0) throw new Error('Stack is empty.');
    return this.min[this.min.length - 1];
  }
}

//

describe('Min Stack', () => {
  it('should pass basic cases', () => {
    const minStack = new MinStack();
    minStack.push(1);
    minStack.push(2);
    minStack.push(0);
    expect(minStack.getMin()).toEqual(0); // return 0
    minStack.pop();
    expect(minStack.top()).toEqual(2); // return 2
    expect(minStack.getMin()).toEqual(1); // return 1
  });
});
