import { GameState } from "../gameCore/gameState";
import { isLegalPlacement } from "../gameCore/isLegalPlacement";
import { areSamePosition, Position } from "../gameCore/position";
import {
    calcRealCellPositions,
    PositionedPiece,
} from "../gameCore/positionedPiece";
import { PlacePieceAction } from "./action";

export function doPlacePiece(gs: GameState, action: PlacePieceAction) {
    if (action.positionPiece.piece.colour !== gs.nextPieceColour) {
        return;
    }
    //is the suggested piece in the player's pool?
    const remaining = gs.piecesLeft[gs.nextPieceColour];
    if (!remaining.find((p) => p.id === action.positionPiece.piece.id)) {
        return;
    }

    if (!isLegalPlacement(action.positionPiece, gs.positionedPieces)) {
        return;
    }
    //let's do it!
    gs.positionedPieces.push(action.positionPiece);

    gs.piecesLeft[gs.nextPieceColour] = gs.piecesLeft[
        gs.nextPieceColour
    ].filter((p) => p.id !== action.positionPiece.piece.id);

    const opponentColour = gs.nextPieceColour === "black" ? "white" : "black";
    if (!gs.hasPassed[opponentColour]) {
        gs.nextPieceColour = opponentColour;
    }
    gs.floatingPiece = null;
}

export function pieceOverlapsAny(
    candidatePositionedPiece: PositionedPiece,
    positionedPieces: PositionedPiece[]
): boolean {
    return positionedPieces.some((existingPiece) =>
        piecesOverlap(candidatePositionedPiece, existingPiece)
    );
}

function piecesOverlap(a: PositionedPiece, b: PositionedPiece): boolean {
    const cellAPositions: Position[] = calcRealCellPositions(a);
    const cellBPositions: Position[] = calcRealCellPositions(b);
    return cellAPositions.some((posA) =>
        cellBPositions.some((posB) => areSamePosition(posA, posB))
    );
}
