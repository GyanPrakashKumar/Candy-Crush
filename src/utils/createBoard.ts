import { candies } from "./candyData";
/*
    1.  Create a new array with the length of the boardSize * boardSize
    2.  Fill the array with null values
    3.  Map over the array and return a random candy from the candies array
    The .map() method is used to iterate over each element of the array. For each element, a random candy is chosen from the candies array using Math.floor(Math.random() * candies.length) as the index.
*/
export const createBoard = (boardSize: number = 8) =>
  Array(boardSize * boardSize)
    .fill(null)
    .map(() => candies[Math.floor(Math.random() * candies.length)]);


