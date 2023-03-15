import { GameState } from "../gameCore/gameState";
import { Rotation } from "../gameCore/rotation";
import { RotateFloatingPieceAction } from "./action";

export function doRotateFloatingPiece(
    gs: GameState,
    action: RotateFloatingPieceAction
) {
    if (gs.floatingPiece === null) {
        return;
    }

    gs.floatingPiece.rotation = ((gs.floatingPiece.rotation + 1) %
        4) as Rotation;
}
