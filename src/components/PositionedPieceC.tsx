import { PositionedPiece } from "../gameCore/positionedPiece";

interface PositionedPieceCProps {
    posPiece: PositionedPiece;
}

export function PositionedPieceC({
    posPiece,
}: PositionedPieceCProps): JSX.Element {
    const { piece, position } = posPiece;
    const { shape, colour } = piece;

    return (
        <>
            {shape.rows.flatMap((row, rowIx) =>
                row.map((cell, colIx) =>
                    cell === 0 ? null : (
                        <div
                            className={"pieceSquare " + colour}
                            key={piece.id + "_" + colIx + "_" + rowIx}
                            style={{
                                gridRow: `${position.y + rowIx}`,
                                gridColumn: `${position.x + colIx}`,
                            }}
                        ></div>
                    )
                )
            )}
        </>
    );
}
