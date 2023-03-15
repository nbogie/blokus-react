import { GameState } from "../gameCore/gameState";
import { MoveFloatingPieceAction } from "./action";

export function doMoveFloatingPiece(
    gs: GameState,
    action: MoveFloatingPieceAction
) {
    if (gs.floatingPiece === null) {
        console.log("no floating piece");
        return;
    }

    gs.floatingPiece.position.x += action.direction.x;
    gs.floatingPiece.position.y += action.direction.y;
}
