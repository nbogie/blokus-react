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

    gs.floatingPiece = null;
    gs.positionedPieces.push(action.positionPiece);
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
