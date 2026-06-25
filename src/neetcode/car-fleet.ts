/**
 * Car Fleet
 * https://neetcode.io/problems/car-fleet/question?list=neetcode150
 */

type Car = {
  position: number;
  speed: number;
  leftMiles?: number;
};

function carFleet(target: number, position: number[], speed: number[]): number {
  const cars: Car[] = [];

  for (let i = 0; i < position.length; i++) {
    cars.push({ position: position[i], speed: speed[i] });
  }

  cars.sort((a, b) => b.position - a.position);

  let fleets = 1;
  let prevLeftMiles = Math.floor((target - cars[0].position) / cars[0].speed);
  cars[0].leftMiles = prevLeftMiles;
  for (let i = 1; i < cars.length; i++) {
    const car = cars[i];
    const currLeftMiles = Math.floor((target - car.position) / car.speed);
    car.leftMiles = currLeftMiles;
    if (currLeftMiles > prevLeftMiles) {
      fleets++;
      prevLeftMiles = currLeftMiles;
    }
  }

  return fleets;
}

//

// carFleet(10, [1, 4], [3, 2]);

describe('Car Fleet', () => {
  it('should pass basic cases', () => {
    expect(carFleet(10, [1, 4], [3, 2])).toEqual(1);
    expect(carFleet(10, [4, 1, 0, 7], [2, 2, 1, 1])).toEqual(3);
  });
});
