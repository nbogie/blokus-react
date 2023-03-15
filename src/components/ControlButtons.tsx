import { Dispatch } from "react";
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
                onClick={() => dispatch({ name: "rotate-floating-piece" })}
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
    );
}
