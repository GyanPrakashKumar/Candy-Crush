import { useAppSelector } from "../store/hooks";
import Tile from "./Tile";

function Board() {
    // Get the board state from the Redux store
    const board: string[] = useAppSelector(({ crashCandy: { board } }) => board);

    // Get the boardSize state from the Redux store
    const boardSize: number = useAppSelector(({ crashCandy: { boardSize } }) => boardSize);

    return (
        <div className="flex flex-wrap rounded-lg" style={{ width: `${6.25 * boardSize}rem`, }}>
            {/* Render each candy tile on the board */}
            {
                board.map((candy: string, index: number) => (
                    <Tile candy={candy} key={index} candyId={index} />
                ))
            }
        </div>
    );
}

export default Board;
