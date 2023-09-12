import { contains, depth, traverse, Tree } from "./tree";

const tree: Tree<string> = {
  data: 'a',
  children: [
    {
      data: 'b',
      children: [
        {
          data: 'e',
          children: []
        },
        {
          data: 'f',
          children: []
        },
      ]
    },
    {
      data: 'c',
      children: []
    },
    {
      data: 'd',
      children: []
    },
  ]
}

describe('Tree', () => {
  it('should traverse', () => {
    expect(traverse(tree)).toEqual(['a', 'b', 'e', 'f', 'c', 'd']);
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
    expect(contains(tree, 'f')).toBe(true);
    expect(contains(tree, 'aaa')).toBe(false);
  });
});