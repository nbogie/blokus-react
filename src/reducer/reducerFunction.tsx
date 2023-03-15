import { GameState } from "../gameCore/gameState";
import { Action } from "./action";
import { doAddRandomPieceFloating } from "./doAddRandomPieceFloating";
import { doMoveFloatingPiece } from "./doMoveFloatingPiece";
import { doPlacePiece } from "./doPlacePiece";
import { doRotateFloatingPiece } from "./doRotateFloatingPiece";

export function reducerFunction(
    gs: GameState,
    action: Action
): void | GameState {
    switch (action.name) {
        case "place-piece":
            doPlacePiece(gs, action);
            return;
        case "rotate-floating-piece":
            doRotateFloatingPiece(gs, action);
            return;
        case "add-random-piece-floating":
            doAddRandomPieceFloating(gs, action);
            return;
        case "reset-game":
            return;
        case "move-floating-piece":
            doMoveFloatingPiece(gs, action);
            return;
        default:
            throw new UnreachableCodeError(
                action,
                "Unexpected action: " + JSON.stringify(action)
            );
    }
}
class UnreachableCodeError extends Error {
    constructor(myNever: never, message: string) {
        super(message);
    }
}
