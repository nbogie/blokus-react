import { GameState } from "../gameCore/gameState";
import { PositionedPiece } from "../gameCore/positionedPiece";
import { shuffle } from "../utils/shuffle";
import { AddRandomPieceFloatingAction } from "./action";

/** Not a legit action for the game */
export function doAddRandomPieceFloating(
    gs: GameState,
    action: AddRandomPieceFloatingAction
) {
    let piece;
    if (action.pieceColour === "white") {
        gs.whitePiecesLeft = shuffle(gs.whitePiecesLeft);
        piece = gs.whitePiecesLeft.pop();
    } else {
        gs.blackPiecesLeft = shuffle(gs.blackPiecesLeft);
        piece = gs.blackPiecesLeft.pop();
    }
    if (!piece) {
        console.log("no pieces left of colour: " + action.pieceColour);
        return;
    }
    const positionedPiece: PositionedPiece = {
        piece: piece,
        rotation: 0,
        position: { x: 7, y: 7 },
        isHFlipped: false,
    };
    gs.floatingPiece = positionedPiece;
    // gs.positionedPieces.push(positionedPiece);
    gs.nextPieceColour = gs.nextPieceColour === "white" ? "black" : "white";
}
