import { Position, randomPosition } from "./position";
import { pick } from "./pick";
import { Piece, PieceColour } from "./piece";
import { allShapes } from "./shape";
import { shuffle } from "../utils/shuffle";

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

export function createPositionedPiecesAtRandom(): PositionedPiece[] {
    const allPieces: Piece[] = [];
    for (let s of allShapes) {
        for (let c of ["black", "white"] as PieceColour[]) {
            const p: Piece = { colour: c, shape: s, id: s.id + "_" + c };
            allPieces.push(p);
        }
    }
    const chosenPieces = shuffle(allPieces).slice(0, 4);
    const positionedPieces = chosenPieces.map(
        (p) => ({ piece: p, position: randomPosition() } as PositionedPiece)
    );
    return positionedPieces;
}
