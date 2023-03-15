import { GameState } from "../gameCore/gameState";
import { PlacePieceAction } from "./action";

export function doPlacePiece(gs: GameState, action: PlacePieceAction) {
    gs.floatingPiece = null;
    gs.positionedPieces.push(action.positionPiece);
}
