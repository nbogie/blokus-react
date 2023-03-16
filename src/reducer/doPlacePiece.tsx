import { GameState } from "../gameCore/gameState";
import { isLegalPlacement } from "../gameCore/isLegalPlacement";
import { areSamePosition, Position } from "../gameCore/position";
import {
    calcTransformedShape,
    PositionedPiece,
} from "../gameCore/positionedPiece";
import { PlacePieceAction } from "./action";

export function doPlacePiece(gs: GameState, action: PlacePieceAction) {
    if (!isLegalPlacement(action.positionPiece, gs.positionedPieces)) {
        return;
    }
    const remaining = gs.piecesLeft[gs.nextPieceColour];

    if (!remaining.find((p) => p.id === action.positionPiece.piece.id)) {
        return;
    }
    gs.floatingPiece = null;
    gs.positionedPieces.push(action.positionPiece);

    gs.piecesLeft[gs.nextPieceColour] = gs.piecesLeft[
        gs.nextPieceColour
    ].filter((p) => p.id !== action.positionPiece.piece.id);

    const opponentColour = gs.nextPieceColour === "black" ? "white" : "black";
    if (!gs.hasPassed[opponentColour]) {
        gs.nextPieceColour = opponentColour;
    }
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

export function calcRealCellPositions(p: PositionedPiece): Position[] {
    const shape = calcTransformedShape(p);
    const positionedCells: Position[] = [];

    shape.rows.forEach((row, y) => {
        row.forEach((cell, x) => {
            if (cell !== 0) {
                positionedCells.push({
                    x: x + p.position.x,
                    y: y + p.position.y,
                });
            }
        });
    });
    return positionedCells;
}
