import { GameState } from "../gameCore/gameState";
import { Action, SelectFloatingPieceAction } from "./action";
import { doAddRandomPieceFloating } from "./doAddRandomPieceFloating";
import { doFlipFloatingPiece } from "./doFlipFloatingPiece";
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
        case "add-random-piece-floating":
            doAddRandomPieceFloating(gs, action);
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
function doSelectFloatingPiece(
    gs: GameState,
    action: SelectFloatingPieceAction
) {
    if (gs.nextPieceColour !== action.colour) {
        return;
    }
    const piecePool =
        action.colour === "black" ? gs.blackPiecesLeft : gs.whitePiecesLeft;
    const foundPiece = piecePool.find((p) => p.id === action.pieceId);

    if (!foundPiece) {
        return;
    }
    gs.floatingPiece = {
        piece: foundPiece,
        isFlipped: false,
        rotation: 0,
        position: { x: 6, y: 6 },
    };
}
