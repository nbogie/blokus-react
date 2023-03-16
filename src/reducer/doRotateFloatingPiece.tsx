import { GameState } from "../gameCore/gameState";
import { positionedPieceIsInBounds } from "../gameCore/piece";
import { Rotation } from "../gameCore/rotation";
import { RotateFloatingPieceAction } from "./action";

export function doRotateFloatingPiece(
    gs: GameState,
    action: RotateFloatingPieceAction
) {
    if (gs.floatingPiece === null) {
        return;
    }
    const newRotation = ((gs.floatingPiece.rotation + 1) % 4) as Rotation;
    const pos = gs.floatingPiece.position;
    if (
        positionedPieceIsInBounds(
            gs.floatingPiece.piece,
            newRotation,
            gs.floatingPiece.isFlipped,
            pos
        )
    ) {
        gs.floatingPiece.rotation = newRotation;
    }
}
