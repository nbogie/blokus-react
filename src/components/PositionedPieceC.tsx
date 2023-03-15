import { PositionedPiece } from "../gameCore/positionedPiece";
import { rotateShapeCW } from "../gameCore/rotateShape";

interface PositionedPieceCProps {
    posPiece: PositionedPiece;
    onClick: (id: string) => void;
}

export function PositionedPieceC({
    posPiece,
    onClick,
}: PositionedPieceCProps): JSX.Element {
    const { piece, position } = posPiece;
    const { shape, colour } = piece;
    const rotatedShape = rotateShapeCW(shape, posPiece.rotation);
    return (
        <>
            {rotatedShape.rows.flatMap((row, rowIx) =>
                row.map((cell, colIx) =>
                    cell === 0 ? null : (
                        <div
                            className={"pieceSquare " + colour}
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
