import { createAllPieces, Piece, PieceColour } from "./piece";
import { PositionedPiece } from "./positionedPiece";

export interface GameState {
    positionedPieces: PositionedPiece[];
    piecesLeft: { black: Piece[]; white: Piece[] };
    hasPassed: { black: boolean; white: boolean };
    floatingPiece: PositionedPiece | null;
    nextPieceColour: PieceColour;
}

export function createInitialGameState(): GameState {
    const allPieces = createAllPieces();
    const whitePieces = allPieces.filter((p) => p.colour === "white");
    const blackPieces = allPieces.filter((p) => p.colour === "black");

    const gs: GameState = {
        positionedPieces: [],
        piecesLeft: { white: whitePieces, black: blackPieces },
        hasPassed: { white: false, black: false },
        floatingPiece: null,
        nextPieceColour: "black",
    };

    return gs;
}
