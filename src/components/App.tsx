import { useImmerReducer } from "use-immer";
import { getStartingPositionForColour } from "../gameCore/board";
import { createInitialGameState } from "../gameCore/gameState";
import { isLegalPlacement } from "../gameCore/isLegalPlacement";
import { reducerFunction } from "../reducer/reducerFunction";
import "./App.css";
import { PositionedPieceC } from "./PositionedPieceC";
import { StartingPositionMarkerC } from "./StartingPositionMarkerC";

function App() {
    const [gameState, dispatch] = useImmerReducer(
        reducerFunction,
        createInitialGameState()
    );

    function moveLeft() {
        dispatch({ name: "move-floating-piece", direction: { x: -1, y: 0 } });
    }
    function moveRight() {
        dispatch({ name: "move-floating-piece", direction: { x: 1, y: 0 } });
    }
    function moveUp() {
        dispatch({ name: "move-floating-piece", direction: { x: 0, y: -1 } });
    }
    function moveDown() {
        dispatch({ name: "move-floating-piece", direction: { x: 0, y: 1 } });
    }

    return (
        <div className="App">
            <div className="gameGrid">
                {gameState.positionedPieces.map((posPiece) => (
                    <PositionedPieceC
                        posPiece={posPiece}
                        key={posPiece.piece.id}
                        onClick={() => {}}
                        highlightError={false}
                    />
                ))}

                {gameState.floatingPiece && (
                    <PositionedPieceC
                        posPiece={gameState.floatingPiece}
                        onClick={() => {}}
                        highlightError={
                            !isLegalPlacement(
                                gameState.floatingPiece,
                                gameState.positionedPieces
                            )
                        }
                    />
                )}
                <StartingPositionMarkerC
                    colour={"white"}
                    position={getStartingPositionForColour("white")}
                />
                <StartingPositionMarkerC
                    colour={"black"}
                    position={getStartingPositionForColour("black")}
                />
            </div>
            <button
                onClick={() =>
                    dispatch({
                        name: "add-random-piece-floating",
                        pieceColour: gameState.nextPieceColour,
                    })
                }
            >
                Add random piece
            </button>

            {gameState.floatingPiece && (
                <div className="movementButtonGrid">
                    <button className="up" onClick={moveUp}>
                        ⬆️
                    </button>
                    <button className="left" onClick={moveLeft}>
                        ⬅️
                    </button>
                    <button className="right" onClick={moveRight}>
                        ➡️
                    </button>
                    <button className="down" onClick={moveDown}>
                        ⬇️
                    </button>
                    <button
                        className="rotate"
                        onClick={() =>
                            dispatch({ name: "rotate-floating-piece" })
                        }
                    >
                        🔄
                    </button>

                    {
                        <button
                            className="lock"
                            onClick={() =>
                                dispatch({
                                    name: "place-piece",
                                    positionPiece: gameState.floatingPiece!,
                                })
                            }
                        >
                            ✅
                        </button>
                    }
                </div>
            )}
        </div>
    );
}

export default App;
