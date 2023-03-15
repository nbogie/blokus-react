import { createPositionedPiecesAtRandom } from "./createPositionedPiecesAtRandom";
import { PositionedPiece } from "./positionedPiece";

export interface GameState {
    posPieces: PositionedPiece[];
}

export function createInitialGameState(): GameState {
    const gs: GameState = {
        posPieces: createPositionedPiecesAtRandom(6),
    };

    return gs;
}
