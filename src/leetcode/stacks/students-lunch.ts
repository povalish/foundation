/**
 * The school cafeteria offers circular and square sandwiches
 * at lunch break, referred to by numbers 0 and 1 respectively.
 * All students stand in a queue. Each student either prefers square or circular sandwiches.
 *
 * The number of sandwiches in the cafeteria is equal to the number of students.
 * The sandwiches are placed in a stack. At each step:
 *
 * If the student at the front of the queue prefers the sandwich on the top
 * of the stack, they will take it and leave the queue.
 *
 * Otherwise, they will leave it and go to the queue's end.
 * This continues until none of the queue students want to take the top sandwich
 * and are thus unable to eat.
 *
 * You are given two integer arrays students and sandwiches where sandwiches[i]
 * is the type of the ith sandwich in the stack (i = 0 is the top of the stack)
 * and students[j] is the preference of the jth student in the initial queue (j = 0
 * is the front of the queue). Return the number of students that are unable to eat.
 *
 * Time Complexity: O(log N)
 * Space Complexity: O(1)
 *
 * #stacks
 */

function countStudents(students: number[], sandwiches: number[]): number {
  let attempts = students.length;

  while (students.length && attempts) {
    const firstStudent = students.shift()!;
    const firstSandwich = sandwiches[0];
    attempts -= 1;

    if (firstSandwich === firstStudent) {
      sandwiches.shift();
      attempts = students.length + 1;
    } else {
      students.push(firstStudent);
    }
  }

  return students.length;
}

//
//

describe('number of students unable to eat lunch', () => {
  test('should return 0', () => {
    const students = [1, 1, 0, 0];
    const sandwiches = [0, 1, 0, 1];
    const result = countStudents(students, sandwiches);
    expect(result).toEqual(0);
  });

  test('should return 0', () => {
    const students = [0, 0];
    const sandwiches = [1, 1];
    const result = countStudents(students, sandwiches);
    expect(result).toEqual(2);
  });

  test('should return 3', () => {
    const students = [1, 1, 1, 0, 0, 1];
    const sandwiches = [1, 0, 0, 0, 1, 1];
    const result = countStudents(students, sandwiches);
    expect(result).toEqual(3);
  });
});
