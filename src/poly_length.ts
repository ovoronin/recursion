function square(n: number): number {
  return n * n;
}

function distance(x1: number, y1: number, x2: number, y2: number): number {
  const dx2 = square(x1 - x2);
  const dy2 = square(y1 - y2);
  return Math.sqrt(dx2 + dy2);
}

export function polyLength(points: Array<[number, number]>): number {
  let len = 0;
  let [x1, y1] = points[0];

  for (const [x2, y2] of points) {
    len += distance(x1, y1, x2, y2);
    x1 = x2;
    y1 = y2;
  }
  return len;
}
