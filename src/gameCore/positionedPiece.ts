import { Position, randomPosition } from "../components/Position";
import { pick } from "./pick";
import { Piece, PieceColour } from "./piece";
import { allShapes } from "./shape";

export interface PositionedPiece {
    piece: Piece;
    position: Position;
}

export function createPositionedPieceAtRandom(): PositionedPiece {
    const shape = pick(allShapes);
    const colour: PieceColour = pick(["black", "white"]);
    const piece: Piece = { shape, id: shape.id + "", colour };
    const position = randomPosition();
    return { position, piece };
}
