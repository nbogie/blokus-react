import { RotatePieceAction } from "./action";
import { GameState } from "../gameCore/gameState";
import { PositionedPiece } from "../gameCore/positionedPiece";
import { Rotation } from "../gameCore/rotation";

export function doRotatePiece(gameState: GameState, action: RotatePieceAction) {
    const pieceToChange: PositionedPiece | undefined = gameState.posPieces.find(
        (p) => p.piece.id === action.pieceId
    );
    if (pieceToChange === undefined) {
        throw new Error("missing piece.  id: " + action.pieceId);
    }
    pieceToChange.rotation = ((pieceToChange.rotation + 1) % 4) as Rotation;
}
