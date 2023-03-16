import { GameState } from "../gameCore/gameState";
import { positionedPieceIsInBounds } from "../gameCore/piece";
import { Rotation } from "../gameCore/rotation";
import { FlipFloatingPieceAction } from "./action";

export function doFlipFloatingPiece(
    gs: GameState,
    action: FlipFloatingPieceAction
) {
    if (gs.floatingPiece === null) {
        return;
    }
    const pos = gs.floatingPiece.position;
    const newFlipState = !gs.floatingPiece.isFlipped;

    const oldRot = gs.floatingPiece.rotation;
    //v-flip is just an hflip with 180 rot
    const newRotation =
        (action.flipDirection === "horizontal" &&
            (oldRot === 0 || oldRot === 2)) ||
        (action.flipDirection === "vertical" && (oldRot === 1 || oldRot === 3))
            ? oldRot
            : (((oldRot + 2) % 4) as Rotation);

    if (
        positionedPieceIsInBounds(
            gs.floatingPiece.piece,
            newRotation,
            newFlipState,
            pos
        )
    ) {
        gs.floatingPiece.isFlipped = newFlipState;
        gs.floatingPiece.rotation = newRotation;
    }
}
