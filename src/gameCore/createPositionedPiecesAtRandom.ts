import { pick } from "../utils/pick";
import { shuffle } from "../utils/shuffle";
import { Piece, PieceColour } from "./piece";
import { randomPosition } from "./position";
import { PositionedPiece } from "./positionedPiece";
import { allRotations } from "./rotation";
import { allShapes } from "./shape";

export function createPositionedPiecesAtRandom(
    numPieces: number
): PositionedPiece[] {
    const allPieces: Piece[] = [];
    for (let s of allShapes) {
        for (let c of ["black", "white"] as PieceColour[]) {
            const p: Piece = { colour: c, shape: s, id: s.id + "_" + c };
            allPieces.push(p);
        }
    }
    const chosenPieces = shuffle(allPieces).slice(0, numPieces);
    const positionedPieces: PositionedPiece[] = chosenPieces.map((p) => ({
        piece: p,
        position: randomPosition(),
        rotation: pick([0, 1, 2, 3]),
    }));
    return positionedPieces;
}

export function createPositionedPieceAtRandom(): PositionedPiece {
    const shape = pick(allShapes);
    const colour: PieceColour = pick(["black", "white"]);
    const piece: Piece = { shape, id: shape.id + "", colour };
    const position = randomPosition();
    const rotation = pick(allRotations);
    return { position, piece, rotation };
}
