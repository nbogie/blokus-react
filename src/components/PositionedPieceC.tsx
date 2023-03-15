import {
    calcTransformedShape,
    PositionedPiece,
} from "../gameCore/positionedPiece";

interface PositionedPieceCProps {
    posPiece: PositionedPiece;
    onClick: (id: string) => void;
    highlightError: boolean;
}

export function PositionedPieceC({
    posPiece,
    onClick,
    highlightError,
}: PositionedPieceCProps): JSX.Element {
    const { piece, position } = posPiece;
    const { colour } = piece;
    const transformedShape = calcTransformedShape(posPiece);

    return (
        <>
            {transformedShape.rows.flatMap((row, rowIx) =>
                row.map((cell, colIx) =>
                    cell === 0 ? null : (
                        <div
                            className={
                                "pieceSquare " +
                                colour +
                                (highlightError ? " error" : "")
                            }
                            key={piece.id + "_" + colIx + "_" + rowIx}
                            style={{
                                gridRow: `${position.y + rowIx + 1}`,
                                gridColumn: `${position.x + colIx + 1}`,
                            }}
                            onClick={() => onClick(piece.id)}
                        ></div>
                    )
                )
            )}
        </>
    );
}
