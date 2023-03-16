import { GameState } from "../gameCore/gameState";
import { Action } from "./action";
import { doFlipFloatingPiece } from "./doFlipFloatingPiece";
import { doMoveFloatingPiece } from "./doMoveFloatingPiece";
import { doPass } from "./doPass";
import { doPlacePiece } from "./doPlacePiece";
import { doRotateFloatingPiece } from "./doRotateFloatingPiece";
import { doSelectFloatingPiece } from "./doSelectFloatingPiece";

export function reducerFunction(
    gs: GameState,
    action: Action
): void | GameState {
    switch (action.name) {
        case "place-piece":
            doPlacePiece(gs, action);
            return;
        case "reset-game":
            return;
        case "move-floating-piece":
            doMoveFloatingPiece(gs, action);
            return;
        case "rotate-floating-piece":
            doRotateFloatingPiece(gs, action);
            return;
        case "flip-floating-piece":
            doFlipFloatingPiece(gs, action);
            return;
        case "select-floating-piece":
            doSelectFloatingPiece(gs, action);
            return;
        case "pass":
            doPass(gs, action);
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
