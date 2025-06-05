import { Queue } from './Queue';
import { Stack, StackBaseOnQueue } from './Stack';

describe('playground', () => {
  test.skip('Queue', () => {
    const ticketOffice = new Queue<string>();

    ticketOffice.enqueue('buyer1');
    ticketOffice.enqueue('buyer2');
    ticketOffice.enqueue('buyer3');
    ticketOffice.enqueue('buyer4');
    ticketOffice.enqueue('buyer5');

    expect(ticketOffice.dequeue()).toEqual('buyer1');
    expect(ticketOffice.top()).toEqual('buyer2');
  });

  test.skip('Stack', () => {
    const books = new Stack<string>();

    books.push('book1');
    books.push('book2');
    books.push('book3');
    books.push('book4');
    books.push('book5');
    books.push('book6');

    expect(books.pop()).toEqual('book6');
    expect(books.top()).toEqual('book5');

    const stackOfGames = new StackBaseOnQueue<string>();

    stackOfGames.push('game1');
    stackOfGames.push('game2');
    stackOfGames.push('game3');
    stackOfGames.push('game4');
    stackOfGames.push('game5');

    expect(stackOfGames.pop()).toEqual('game5');
    expect(stackOfGames.top()).toEqual('game4');
  });
});
