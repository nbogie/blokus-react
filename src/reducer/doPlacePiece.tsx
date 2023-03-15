import { GameState } from "../gameCore/gameState";
import { isLegalPlacement } from "../gameCore/isLegalPlacement";
import { Position, samePosition } from "../gameCore/position";
import { PositionedPiece } from "../gameCore/positionedPiece";
import { rotateShapeCW } from "../gameCore/rotateShape";
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
        cellBPositions.some((posB) => samePosition(posA, posB))
    );
}

export function calcRealCellPositions(p: PositionedPiece): Position[] {
    const rotatedShape = rotateShapeCW(p.piece.shape, p.rotation);
    const positionedCells: Position[] = [];

    rotatedShape.rows.forEach((row, y) => {
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
