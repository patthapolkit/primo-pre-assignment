export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  // Merge two sorted arrays (ascending)
  const mergeTwoSorted = (arr1: number[], arr2: number[]): number[] => {
    const result: number[] = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
        result.push(arr1[i++]);
      } else {
        result.push(arr2[j++]);
      }
    }

    // Remaining elements
    while (i < arr1.length) result.push(arr1[i++]);
    while (j < arr2.length) result.push(arr2[j++]);

    return result;
  };

  // Reverse collection_3 to make it ascending
  const reversedCollection3 = collection_3.reverse();

  // Merge all three arrays
  const mergedTwo = mergeTwoSorted(collection_1, collection_2);
  return mergeTwoSorted(mergedTwo, reversedCollection3);
}
