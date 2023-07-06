/*
formulaForColumnOfFour(boardSize: number): This function calculates the index of the last element in a column of four candies based on the board size. It uses a formula to determine the index: boardSize * boardSize - (boardSize + boardSize + boardSize) - 1. The result is returned as the index of the last element in the column of four.
*/
// Formula to calculate the index of the last element in a column of four
export const formulaForColumnOfFour = (boardSize: number) =>
    boardSize * boardSize - (boardSize + boardSize + boardSize) - 1;
/*
formulaForColumnOfThree(boardSize: number): Similar to the previous function, this function calculates the index of the last element in a column of three candies based on the board size. The formula used is boardSize * boardSize - (boardSize + boardSize) - 1.
*/
// Formula to calculate the index of the last element in a column of three
export const formulaForColumnOfThree = (boardSize: number) =>
    boardSize * boardSize - (boardSize + boardSize) - 1;
/*
formulaForMoveBelow(boardSize: number): This function calculates the index of the element below the board, which is used as an invalid move. The formula used is boardSize * boardSize - boardSize - 1.
*/
// Formula to calculate the index of the element below the last row
export const formulaForMoveBelow = (boardSize: number) =>
    boardSize * boardSize - boardSize - 1;
/*
generateInvalidMoves(boardSize: number, isFour: boolean = false): This function generates an array of invalid moves based on the board size. It takes two arguments: boardSize and isFour. The boardSize argument is used to determine the length of the array. The isFour argument is used to determine whether the array should include invalid moves for a column of four candies. By default, the isFour argument is set to false, which means that the array will not include invalid moves for a column of four candies. If the isFour argument is set to true, the array will include invalid moves for a column of four candies.
*/
// Function to generate an array of invalid moves based on the board size    
export const generateInvalidMoves = (
    boardSize: number,
    isFour: boolean = false
) => {
    const invalidMoves: Array<number> = [];
    // Generate invalid moves for each row based on the board size
    for (let i: number = boardSize; i <= boardSize * boardSize; i += boardSize) {
        if (isFour) {
            // For column of four, exclude the fourth element from each row
            invalidMoves.push(i - 3);
        }
        // Exclude the last two elements from each row
        invalidMoves.push(i - 2);
        invalidMoves.push(i - 1);
    }
    return invalidMoves;
};