import { pick } from "../utils/pick";
import { shuffle } from "../utils/shuffle";
import {
    Piece,
    PieceColour,
    pieceDimensionsWhenRotatedAndFlipped,
} from "./piece";
import { randomPositionFitting } from "./position";
import { PositionedPiece } from "./positionedPiece";
import { allRotations, randomRotation } from "./rotation";
import { allShapes } from "./shape";

export function createPositionedPiecesAtRandom(
    numPieces: number
): PositionedPiece[] {
    const allPieces: Piece[] = createAllPieces();
    const chosenPieces = shuffle(allPieces).slice(0, numPieces);
    const positionedPieces: PositionedPiece[] = chosenPieces.map((piece) => {
        const rotation = randomRotation();
        const dim = pieceDimensionsWhenRotatedAndFlipped({
            piece,
            rotation,
            isHFlipped: false,
        });

        return {
            piece,
            position: randomPositionFitting(dim),
            rotation,
            isHFlipped: false,
        };
    });

    return positionedPieces;
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

export function createPositionedPieceAtRandom(): PositionedPiece {
    const shape = pick(allShapes);
    const colour: PieceColour = pick(["black", "white"]);
    const piece: Piece = { shape, id: shape.id + "", colour };
    const rotation = pick(allRotations);
    const position = randomPositionFitting(
        pieceDimensionsWhenRotatedAndFlipped({
            piece,
            rotation,
            isHFlipped: false,
        })
    );
    return { position, piece, rotation, isHFlipped: false };
}
