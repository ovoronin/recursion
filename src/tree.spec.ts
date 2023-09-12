import { contains, depth, traverse, Tree } from "./tree";

const tree: Tree<string> = {
  data: 'a',
  children: [
    {
      data: 'b',
      children: [
        {
          data: 'd',
          children: []
        },
        {
          data: 'e',
          children: []
        },
      ]
    },
    {
      data: 'c',
      children: []
    },
  ]
}

describe('Tree', () => {
  it('should traverse', () => {
    expect(traverse(tree)).toEqual(['a', 'b', 'd', 'e', 'c']);
  });

  it('should get depth', () => {
    expect(depth(tree)).toBe(3);
  });

  it('should check for containing items', () => {
    expect(contains(tree, 'a')).toBe(true);
    expect(contains(tree, 'b')).toBe(true);
    expect(contains(tree, 'c')).toBe(true);
    expect(contains(tree, 'd')).toBe(true);
    expect(contains(tree, 'e')).toBe(true);
    expect(contains(tree, 'f')).toBe(false);
  });
});