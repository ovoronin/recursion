export interface Tree<T> {
  data: T;
  children: Array<Tree<T>>
}

export const traverse = <T>(tree: Tree<T>): Array<T> => {
  let result: Array<T> = [tree.data];

  if (tree.children.length) {
    tree.children.forEach(child => {
      result = [...result, ...traverse(child)];
    });
  }
  return result;
}

export const depth = <T>(tree: Tree<T>): number => {
  if (tree.children.length) {
    let max = 0;
    tree.children.forEach(child => {
      max = Math.max(max, depth(child));
    });
    return max + 1;
  }
  return 1;
}

export const contains = <T>(tree: Tree<T>, value: T): boolean => {
  if (tree.data === value) {
    return true;
  }
  return tree.children.some(child => contains(child, value));
}