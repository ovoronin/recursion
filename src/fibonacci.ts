export const counters = new Map<number, number>();
export const fib = (n: number): number => {
  counters.set(n, (counters.get(n) || 0) + 1);

  if (n <= 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

const memo = new Map<number, number>();
export const fib_memo = (n: number): number => {
  if (memo.has(n)) {
    return memo.get(n)!;
  }

  counters.set(n, (counters.get(n) || 0) + 1);

  if (n <= 1) {
    return 1;
  }

  const result = fib_memo(n - 1) + fib_memo(n - 2);
  memo.set(n, result);
  return result;
}
