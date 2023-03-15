import { GameState } from "../gameCore/gameState";
import { pieceWouldBeInBounds } from "../gameCore/piece";
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
    if (pieceWouldBeInBounds(gs.floatingPiece.piece, newRotation, pos)) {
        gs.floatingPiece.rotation = newRotation;
    }
}