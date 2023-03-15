import { boardWidth, boardHeight } from "./board";
import { Position } from "./position";
import { rotateShapeCW } from "./rotateShape";
import { Rotation } from "./rotation";
import { Shape } from "./shape";

export interface Piece {
    id: string;
    shape: Shape;
    colour: PieceColour;
}

export type PieceColour = "black" | "white";

export function pieceDimensionsWhenRotatedAndFlipped(positionedPiece: {
    piece: Piece;
    rotation: Rotation;
    isHFlipped: boolean;
}): {
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

export function pieceWouldBeInBounds(
    piece: Piece,
    rotation: Rotation,
    isHFlipped: boolean,
    pos: Position
) {
    const dim = pieceDimensionsWhenRotatedAndFlipped({
        piece,
        rotation,
        isHFlipped,
    });
    return (
        pos.x >= 0 &&
        pos.x + dim.width <= boardWidth &&
        pos.y >= 0 &&
        pos.y + dim.height <= boardHeight
    );
}
