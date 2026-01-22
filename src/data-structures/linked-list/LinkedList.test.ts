import { LinkedList } from './LinkedList';

describe('LinkedList', () => {
  test('how it works', () => {
    const list = new LinkedList();

    list.pushAtStart(4);
    list.pushAtStart(3);
    list.pushAtStart(2);
    list.pushAtStart(1);

    expect(list.print()).toEqual('1 -> 2 -> 3 -> 4');

    list.pushAtEnd(5);
    list.pushAtEnd(6);

    expect(list.print()).toEqual('1 -> 2 -> 3 -> 4 -> 5 -> 6');

    list.popAtStart();
    expect(list.print()).toEqual('2 -> 3 -> 4 -> 5 -> 6');

    list.popAtEnd();
    expect(list.print()).toEqual('2 -> 3 -> 4 -> 5');

    list.moveCursorAt(2);
    expect(list.cursor?.value).toEqual(4);

    list.pushAfter(list.cursor, 5);
    list.pushAfter(list.cursor, 6);
    list.pushAfter(list.cursor, 7);
    expect(list.print()).toEqual('2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 5');
    expect(list.cursor?.value).toEqual(7);

    list.moveCursorAt(0);
    list.pushBefore(list.cursor, 1);
    list.pushBefore(list.cursor, 0);
    expect(list.print()).toEqual('0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 5');
    expect(list.cursor?.value).toEqual(0);

    expect(list.readAtStart()).toEqual(0);
    expect(list.readAtEnd()).toEqual(5);
  });
});
