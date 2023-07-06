// Check if there is a column of four candies with the same color
// Returns true if a match is found and updates the board
// Note: Uses the formulaForColumnOfFour to determine the last index of the column
export const isColumnOfFour = (
    newBoard: string[],
    boardSize: number,
    formulaForColumnOfFour: number
) => {
    for (let i: number = 0; i <= formulaForColumnOfFour; i++) {
        const columnOfFour: number[] = [
            i,
            i + boardSize,
            i + boardSize * 2,
            i + boardSize * 3,
        ];
        const decidedColor: string = newBoard[i];
        const isBlank: boolean = newBoard[i] === "";
        if (
            columnOfFour.every(
                (square: number) => newBoard[square] === decidedColor && !isBlank
            )
        ) {
            columnOfFour.forEach((square: number) => (newBoard[square] = ""));
            return true;
        }
    }
};

// Check if there is a row of four candies with the same color
// Returns true if a match is found and updates the board
// Note: Skips indices included in the invalidMovesForColumnOfFour array
export const checkForRowOfFour = (
    newBoard: String[],
    boardSize: number,
    invalidMovesForColumnOfFour: number[]
) => {
    for (let i = 0; i < boardSize * boardSize; i++) {
        const rowOfFour = [i, i + 1, i + 2, i + 3];
        const decidedColor = newBoard[i];
        const isBlank = newBoard[i] === "";
        if (invalidMovesForColumnOfFour.includes(i)) continue;
        if (
            rowOfFour.every((square) => newBoard[square] === decidedColor && !isBlank)
        ) {
            rowOfFour.forEach((square) => (newBoard[square] = ""));
            return true;
        }
    }
};

// Check if there is a column of three candies with the same color
// Returns true if a match is found and updates the board
// Note: Uses the formulaForColumnOfThree to determine the last index of the column
export const checkForColumnOfThree = (
    newBoard: String[],
    boardSize: number,
    formulaForColumnOfThree: number
) => {
    for (let i = 0; i <= formulaForColumnOfThree; i++) {
        const columnOfThree = [i, i + boardSize, i + boardSize * 2];
        const decidedColor = newBoard[i];
        const isBlank = newBoard[i] === "";
        if (
            columnOfThree.every(
                (square) => newBoard[square] === decidedColor && !isBlank
            )
        ) {
            columnOfThree.forEach((square) => (newBoard[square] = ""));
            return true;
        }
    }
};

// Check if there is a row of three candies with the same color
// Returns true if a match is found and updates the board
// Note: Skips indices included in the invalidMovesForColumnOfThree array
export const checkForRowOfThree = (
    newBoard: string[],
    boardSize: number,
    invalidMovesForColumnOfThree: number[]
) => {
    for (let i = 0; i < boardSize * boardSize; i++) {
        const rowOfThree = [i, i + 1, i + 2];
        const decidedColor = newBoard[i];
        const isBlank = newBoard[i] === "";
        if (invalidMovesForColumnOfThree.includes(i)) continue;
        if (
            rowOfThree.every(
                (square) => newBoard[square] === decidedColor && !isBlank
            )
        ) {
            rowOfThree.forEach((square) => (newBoard[square] = ""));
            return true;
        }
    }
};

/*
isColumnOfFour(newBoard: string[], boardSize: number, formulaForColumnOfFour: number): This function checks if there is a column of four candies with the same color in the board. It iterates through each index up to the formulaForColumnOfFour value. For each index, it creates a columnOfFour array consisting of the current index and the three indices below it. It then checks if all the squares in the column of four have the same color as the decidedColor and are not blank. If this condition is met, it sets the squares in the column to blank and returns true to indicate a match.

checkForRowOfFour(newBoard: string[], boardSize: number, invalidMovesForColumnOfFour: number[]): This function checks if there is a row of four candies with the same color in the board. It iterates through each index in the board. For each index, it creates a rowOfFour array consisting of the current index and the three indices to the right of it. It then checks if all the squares in the row of four have the same color as the decidedColor and are not blank. Additionally, it skips the iteration if the current index is included in the invalidMovesForColumnOfFour array. If a match is found, it sets the squares in the row to blank and returns true.

checkForColumnOfThree(newBoard: string[], boardSize: number, formulaForColumnOfThree: number): This function checks if there is a column of three candies with the same color in the board. It iterates through each index up to the formulaForColumnOfThree value. For each index, it creates a columnOfThree array consisting of the current index and the two indices below it. It then checks if all the squares in the column of three have the same color as the decidedColor and are not blank. If this condition is met, it sets the squares in the column to blank and returns true.

checkForRowOfThree(newBoard: string[], boardSize: number, invalidMovesForColumnOfThree: number[]): This function checks if there is a row of three candies with the same color in the board. It iterates through each index in the board. For each index, it creates a rowOfThree array consisting of the current index and the two indices to the right of it. It then checks if all the squares in the row of three have the same color as the decidedColor and are not blank. Additionally, it skips the iteration if the current index is included in the invalidMovesForColumnOfThree array. If a match is found, it sets the squares in the row to blank and returns true.
*/