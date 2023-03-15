import { boardWidth, boardHeight } from "./gameState";
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

export function pieceDimensionsWhenRotated(positionedPiece: {
    piece: Piece;
    rotation: Rotation;
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
    pos: Position
) {
    const dim = pieceDimensionsWhenRotated({ piece, rotation });
    return (
        pos.x >= 0 &&
        pos.x + dim.width <= boardWidth &&
        pos.y >= 0 &&
        pos.y + dim.height <= boardHeight
    );
}
