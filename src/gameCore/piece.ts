import { boardWidth, boardHeight } from "./board";
import { Position } from "./position";
import { rotateShapeCW } from "./rotateShape";
import { Rotation } from "./rotation";
import { allShapes, Shape } from "./shape";

export interface Piece {
    id: string;
    shape: Shape;
    colour: PieceColour;
}

export type PieceColour = "black" | "white";
export const allPieceColours: PieceColour[] = ["black", "white"];
export function pieceDimensionsWhenRotatedAndFlipped(positionedPiece: {
    piece: Piece;
    rotation: Rotation;
    isFlipped: boolean;
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
        isFlipped: isHFlipped,
    });
    return (
        pos.x >= 0 &&
        pos.x + dim.width <= boardWidth &&
        pos.y >= 0 &&
        pos.y + dim.height <= boardHeight
    );
}

export function createAllPieces() {
    const allPieces: Piece[] = [];
    for (let s of allShapes) {
        for (let c of ["black", "white"] as PieceColour[]) {
            const p: Piece = { colour: c, shape: s, id: s.id + "_" + c };
            allPieces.push(p);
        }
    }
    return allPieces;
}
