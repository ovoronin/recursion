import { polyLength } from "./poly_length";

describe('Polygon length', () => {
  test('Length', () => {
    expect(polyLength([[0,0], [1,0]])).toBe(1);
    expect(polyLength([[-2,-2], [1,1]])).toBeCloseTo(3*Math.sqrt(2));
  });
});