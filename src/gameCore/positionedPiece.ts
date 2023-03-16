import { hFlipShape } from "./flipShape";
import { Piece } from "./piece";
import { Position } from "./position";
import { rotateShapeCW } from "./rotateShape";
import { Rotation } from "./rotation";
import { Shape } from "./shape";

export interface PositionedPiece {
    piece: Piece;
    position: Position;
    rotation: Rotation;
    isFlipped: boolean;
}

export function calcTransformedShape(posPiece: PositionedPiece): Shape {
    let shape: Shape = posPiece.piece.shape;
    if (posPiece.isFlipped) {
        shape = hFlipShape(shape);
    }
    return rotateShapeCW(shape, posPiece.rotation);
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
