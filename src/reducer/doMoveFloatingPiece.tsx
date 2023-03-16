import { GameState } from "../gameCore/gameState";
import { positionedPieceIsInBounds } from "../gameCore/piece";
import { addToPosition } from "../gameCore/position";
import { MoveFloatingPieceAction } from "./action";

export function doMoveFloatingPiece(
    gs: GameState,
    action: MoveFloatingPieceAction
) {
    if (gs.floatingPiece === null) {
        console.log("no floating piece");
        return;
    }

    const currentPosition = gs.floatingPiece.position;
    const candidatePosition = addToPosition(currentPosition, action.direction);
    if (
        positionedPieceIsInBounds(
            gs.floatingPiece.piece,
            gs.floatingPiece.rotation,
            gs.floatingPiece.isFlipped,
            candidatePosition
        )
    ) {
        gs.floatingPiece.position.x += action.direction.x;
        gs.floatingPiece.position.y += action.direction.y;
    }
}
