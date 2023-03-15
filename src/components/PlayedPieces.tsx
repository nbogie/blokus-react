import { GameState } from "../gameCore/gameState";
import { PositionedPieceC } from "./PositionedPieceC";

export function PlayedPieces({
    gameState,
}: {
    gameState: GameState;
}): JSX.Element {
    return (
        <>
            {gameState.positionedPieces.map((posPiece) => (
                <PositionedPieceC
                    posPiece={posPiece}
                    key={posPiece.piece.id}
                    onClick={() => {}}
                    highlightError={false}
                />
            ))}
        </>
    );
}
