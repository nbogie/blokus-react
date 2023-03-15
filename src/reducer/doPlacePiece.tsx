import { hFlipShape, vFlipShape } from "../gameCore/flipShape";
import { GameState } from "../gameCore/gameState";
import { isLegalPlacement } from "../gameCore/isLegalPlacement";
import { Position, areSamePosition } from "../gameCore/position";
import { PositionedPiece } from "../gameCore/positionedPiece";
import { rotateShapeCW } from "../gameCore/rotateShape";
import { Shape } from "../gameCore/shape";
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
    let shape: Shape = p.piece.shape;
    if (p.isHFlipped) {
        //if the piece is rotated by 90 or 270 degrees, then asking for a hflip should perform a vflip!
        if (p.rotation === 0 || p.rotation === 2) {
            shape = hFlipShape(shape);
        } else {
            shape = vFlipShape(shape);
        }
    }
    shape = rotateShapeCW(shape, p.rotation);
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
