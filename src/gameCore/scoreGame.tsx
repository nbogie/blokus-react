import { PieceColour } from "./piece";
import { countCellsInShape } from "./shape";
import { GameState } from "./gameState";

interface Scoring {
    white: number;
    black: number;
}

export function scoreGame(gameState: GameState): Scoring {
    return {
        white: scorePlayer(gameState, "white"),
        black: scorePlayer(gameState, "black"),
    };
}
function scorePlayer(gameState: GameState, pieceColour: PieceColour): number {
    const remainingPieces = gameState.piecesLeft[pieceColour];
    const countOfRemainingSquares = sum(
        remainingPieces.map((p) => countCellsInShape(p.shape))
    );
    const playedPieces = gameState.positionedPieces.filter(
        (p) => p.piece.colour === pieceColour
    );
    const placedAllPieces = remainingPieces.length === 0;
    const lastPlacedPiece = playedPieces.at(-1);
    const lastPieceWas1x1 =
        lastPlacedPiece !== undefined &&
        countCellsInShape(lastPlacedPiece.piece.shape) === 1;

    const placedAllBonus = placedAllPieces ? 15 : 0;
    const lastPieceBonus = placedAllPieces && lastPieceWas1x1 ? 5 : 0;
    const totalScore =
        placedAllBonus + lastPieceBonus - countOfRemainingSquares;
    return totalScore;
}

function sum(arr: number[]): number {
    return arr.reduce((a, b) => a + b, 0);
}
