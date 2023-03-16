import { GameState } from "../gameCore/gameState";
import { SelectFloatingPieceAction } from "./action";

export function doSelectFloatingPiece(
    gs: GameState,
    action: SelectFloatingPieceAction
) {
    if (gs.nextPieceColour !== action.colour) {
        return;
    }
    const piecePool = gs.piecesLeft[gs.nextPieceColour];
    const foundPiece = piecePool.find((p) => p.id === action.pieceId);

    if (!foundPiece) {
        return;
    }
    gs.floatingPiece = {
        piece: foundPiece,
        isFlipped: false,
        rotation: 0,
        position: gs.floatingPiece?.position ?? { x: 6, y: 6 },
    };
}
