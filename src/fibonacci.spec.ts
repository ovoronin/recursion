import { counters, fib, fib_memo } from "./fibonacci";

describe('Fibonacci', () => {
  test('Base cases', () => {
    expect(fib(0)).toBe(1);
    expect(fib(1)).toBe(1);
  });

  test('Recursion', () => {
    expect(fib(2)).toBe(2);
    expect(fib(3)).toBe(3);
    expect(fib(4)).toBe(5);
    expect(fib(5)).toBe(8);
    expect(fib(6)).toBe(13);
    expect(fib(7)).toBe(21);
    expect(fib(8)).toBe(34);
  });

  test('Memoization', () => {
    counters.clear();
    expect(fib(9)).toBe(55);
    console.log(counters);

    counters.clear();
    expect(fib_memo(9)).toBe(55);
    console.log(counters);
  })
});