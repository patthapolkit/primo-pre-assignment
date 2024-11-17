import { merge } from "./merge";

const collection1 = [1, 3, 5];
const collection2 = [2, 4, 6];
const collection3 = [9, 7, 5];

console.log(merge(collection1, collection2, collection3)); // Output: [1, 2, 3, 4, 5, 5, 6, 7, 9]
