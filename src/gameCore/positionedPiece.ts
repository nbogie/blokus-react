import { Piece } from "./piece";
import { Position } from "./position";
import { rotateShapeCW } from "./rotateShape";
import { Rotation } from "./rotation";

export interface PositionedPiece {
    piece: Piece;
    position: Position;
    rotation: Rotation;
}

export function positionedPieceDimensions(positionedPiece: PositionedPiece): {
    width: number;
    height: number;
} {
    const rotatedPiece = rotateShapeCW(
        positionedPiece.piece.shape,
        positionedPiece.rotation
    );
    return {
        height: rotatedPiece.rows.length,
        width: rotatedPiece.rows[0].length,
    };
}
