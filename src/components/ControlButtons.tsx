import { Dispatch } from "react";
import { getRandomLegalPlacement } from "../gameCore/ai";
import { GameState } from "../gameCore/gameState";
import { Action } from "../reducer/action";

export function ControlButtons({
    dispatch,
    gameState,
}: {
    dispatch: Dispatch<Action>;
    gameState: GameState;
}) {
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
        <div className="movementButtonGrid">
            <button
                className="up"
                onClick={moveUp}
                disabled={!gameState.floatingPiece}
            >
                ⬆️
            </button>
            <button
                className="left"
                onClick={moveLeft}
                disabled={!gameState.floatingPiece}
            >
                ⬅️
            </button>
            <button
                className="right"
                onClick={moveRight}
                disabled={!gameState.floatingPiece}
            >
                ➡️
            </button>
            <button
                className="down"
                onClick={moveDown}
                disabled={!gameState.floatingPiece}
            >
                ⬇️
            </button>
            <button
                className="rotate"
                onClick={() => dispatch({ name: "rotate-floating-piece" })}
                disabled={!gameState.floatingPiece}
            >
                🔄
            </button>
            <button
                className="flipH"
                onClick={() =>
                    dispatch({
                        name: "flip-floating-piece",
                        flipDirection: "horizontal",
                    })
                }
                disabled={!gameState.floatingPiece}
            >
                ↔️
            </button>
            <button
                className="flipV"
                onClick={() =>
                    dispatch({
                        name: "flip-floating-piece",
                        flipDirection: "vertical",
                    })
                }
                disabled={!gameState.floatingPiece}
            >
                ↕️
            </button>

            <button
                className="lock"
                onClick={() =>
                    gameState.floatingPiece !== null
                        ? dispatch({
                              name: "place-piece",
                              positionPiece: gameState.floatingPiece,
                          })
                        : () => {}
                }
                disabled={!gameState.floatingPiece}
            >
                ✅
            </button>

            <button
                className="pass"
                onClick={() =>
                    dispatch({
                        name: "pass",
                    })
                }
            >
                🏳️
            </button>

            <button
                className="aiMove"
                onClick={() => {
                    const placement = getRandomLegalPlacement(
                        gameState.nextPieceColour,
                        gameState
                    );
                    if (placement) {
                        dispatch({
                            name: "place-piece",
                            positionPiece: placement,
                        });
                    }
                }}
            >
                💻
            </button>
        </div>
    );
}
