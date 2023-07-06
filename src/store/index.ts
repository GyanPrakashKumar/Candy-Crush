// Import necessary dependencies from Redux Toolkit
import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { dragEndReducer } from "./reducers/dragEnd";
import { moveBelowReducer } from "./reducers/moveBelow";
// import { configureStore } from "@reduxjs/toolkit/dist/configureStore";

// Define the initial state object with board and boardSize properties
const initialState: {
    board: string[];
    boardSize: number;
    squareBeingReplaced: Element | undefined;
    squareBeingDragged: Element | undefined;
} = {
    board: [],
    boardSize: 8,
    squareBeingReplaced: undefined,
    squareBeingDragged: undefined,
};

// Create a slice of the Redux store called "crashCandy" using createSlice function
// Define the updateBoard reducer to update the board state
const candySlice = createSlice({
    name: "crashCandy",
    initialState,
    reducers: {
        updateBoard: (state, action: PayloadAction<string[]>) => {
            state.board = action.payload
        },
        dragStart: (state, action: PayloadAction<any>) => {
            state.squareBeingDragged = action.payload;
        },
        dragDrop: (state, action: PayloadAction<any>) => {
            state.squareBeingReplaced = action.payload;
        },
        dragEnd: dragEndReducer,
        moveBelow: moveBelowReducer,
    },
});

// Configure the Redux store using configureStore function
// Pass in the crashCandy reducer from the candySlice
export const store = configureStore({
    reducer: {
        crashCandy: candySlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

// Define the types for RootState and AppDispatch using the store object
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// Extract the updateBoard action from the candySlice
export const { updateBoard, moveBelow, dragDrop, dragEnd, dragStart } = candySlice.actions;