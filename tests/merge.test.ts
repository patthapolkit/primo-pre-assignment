import { merge } from "../src/merge";

describe("merge", () => {
  test("merge three sorted arrays correctly", () => {
    const collection1 = [1, 3, 5];
    const collection2 = [2, 4, 6];
    const collection3 = [9, 7, 0];

    const result = merge(collection1, collection2, collection3);

    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 9]);
  });

  test("handles empty arrays", () => {
    const collection1: number[] = [];
    const collection2: number[] = [];
    const collection3: number[] = [];

    const result = merge(collection1, collection2, collection3);

    expect(result).toEqual([]);
  });

  test("handles arrays of different lengths", () => {
    const collection1 = [1, 4];
    const collection2 = [2];
    const collection3 = [5, 3];

    const result = merge(collection1, collection2, collection3);

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test("handles arrays with duplicate values", () => {
    const collection1 = [1, 2, 2];
    const collection2 = [2, 3, 3];
    const collection3 = [4, 2, 1];

    const result = merge(collection1, collection2, collection3);

    expect(result).toEqual([1, 1, 2, 2, 2, 2, 3, 3, 4]);
  });
});
