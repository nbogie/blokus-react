import { GameState } from "../gameCore/gameState";
import { pieceWouldBeInBounds } from "../gameCore/piece";
import { HFlipFloatingPieceAction } from "./action";

export function doHFlipFloatingPiece(
    gs: GameState,
    action: HFlipFloatingPieceAction
) {
    if (gs.floatingPiece === null) {
        return;
    }
    const pos = gs.floatingPiece.position;
    const newHFlip = !gs.floatingPiece.isHFlipped;
    if (
        pieceWouldBeInBounds(
            gs.floatingPiece.piece,
            gs.floatingPiece.rotation,
            newHFlip,
            pos
        )
    ) {
        gs.floatingPiece.isHFlipped = newHFlip;
    }
}
