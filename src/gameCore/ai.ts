import { pick } from "../utils/pick";
import { boardWidth } from "./board";
import { GameState } from "./gameState";
import { isLegalPlacement } from "./isLegalPlacement";
import { Piece, PieceColour } from "./piece";
import { PositionedPiece } from "./positionedPiece";
import { allRotations } from "./rotation";
export function allPlacementsOfPieceIncIllegal(
    piece: Piece
): PositionedPiece[] {
    const positionedPieces: PositionedPiece[] = [];
    for (let rotation of allRotations) {
        for (let isFlipped of [true, false]) {
            for (let colIx = 0; colIx < boardWidth; colIx++) {
                for (let rowIx = 0; rowIx < boardWidth; rowIx++) {
                    const position = { x: colIx, y: rowIx };
                    const pp: PositionedPiece = {
                        isFlipped,
                        rotation,
                        piece,
                        position,
                    };
                    positionedPieces.push(pp);
                }
            }
        }
    }
    return positionedPieces;
}

export function allLegalPlacementsOfPiece(
    piece: Piece,
    gameState: GameState
): PositionedPiece[] {
    return allPlacementsOfPieceIncIllegal(piece).filter((placement) =>
        isLegalPlacement(placement, gameState.positionedPieces)
    );
}

export function allLegalPlacementsOfAllRemainingPieces(
    pieceColour: PieceColour,
    gameState: GameState
): (readonly [Piece, PositionedPiece[]])[] {
    return gameState.piecesLeft[pieceColour]
        .map((p) => [p, allLegalPlacementsOfPiece(p, gameState)] as const)
        .filter(([, moves]) => moves.length > 0);
}

export function getRandomLegalPlacement(
    pieceColour: PieceColour,
    gameState: GameState
): PositionedPiece | null {
    const allLegal = allLegalPlacementsOfAllRemainingPieces(
        pieceColour,
        gameState
    );

    if (allLegal.length === 0) {
        return null;
    } else {
        //maybe pick the biggest piece that has moves
        const [, moves] = pick(allLegal);
        return pick(moves);
    }
}
