import { GameState } from "../gameCore/gameState";
import { Action } from "./action";
import { doRotatePiece } from "./doRotatePiece";

export function reducerFunction(
    gs: GameState,
    action: Action
): void | GameState {
    switch (action.name) {
        case "place-piece":
            return;
        case "reset-game":
            return;
        case "rotate-piece":
            doRotatePiece(gs, action);
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
