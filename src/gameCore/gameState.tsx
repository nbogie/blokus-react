import { createAllPieces } from "./createPositionedPiecesAtRandom";
import { Piece, PieceColour } from "./piece";
import { PositionedPiece } from "./positionedPiece";

export interface GameState {
    positionedPieces: PositionedPiece[];
    whitePiecesLeft: Piece[];
    blackPiecesLeft: Piece[];
    floatingPiece: PositionedPiece | null;
    nextPieceColour: PieceColour;
}

export function createInitialGameState(): GameState {
    const allPieces = createAllPieces();
    const whitePieces = allPieces.filter((p) => p.colour === "white");
    const blackPieces = allPieces.filter((p) => p.colour === "black");

    const gs: GameState = {
        positionedPieces: [],
        whitePiecesLeft: whitePieces,
        blackPiecesLeft: blackPieces,
        floatingPiece: null,
        nextPieceColour: "black",
    };

    return gs;
}

export const boardWidth = 14;
export const boardHeight = 14;
