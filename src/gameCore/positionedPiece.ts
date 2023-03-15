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
