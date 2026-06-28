/**
 * Online Stock Span
 * https://neetcode.io/problems/online-stock-span/question
 */

type Stock = {
  price: number;
  span: number;
};

class StockSpanner {
  private stack: Stock[] = [];

  constructor() {}

  next(price: number): number {
    let span = 1;

    while (this.stack.length && this.stack[this.stack.length - 1].price <= price) {
      span += this.stack.pop()!.span;
    }

    this.stack.push({ price, span });
    return span;
  }
}

//

describe('Online Stock Span', () => {
  it('should pass basic cases', () => {
    const stockSpanner = new StockSpanner();
    expect(stockSpanner.next(100)).toEqual(1);
    expect(stockSpanner.next(80)).toEqual(1);
    expect(stockSpanner.next(60)).toEqual(1);
    expect(stockSpanner.next(70)).toEqual(2);
    expect(stockSpanner.next(60)).toEqual(1);
    expect(stockSpanner.next(75)).toEqual(4);
    expect(stockSpanner.next(85)).toEqual(6);
  });
});
