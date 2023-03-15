import { hFlipShape } from "../gameCore/flipShape";
import { PositionedPiece } from "../gameCore/positionedPiece";
import { rotateShapeCW } from "../gameCore/rotateShape";
import { Shape } from "../gameCore/shape";

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

    let shape: Shape = posPiece.piece.shape;
    if (posPiece.isFlipped) {
        shape = hFlipShape(shape);
    }

    const transformedShape = rotateShapeCW(shape, posPiece.rotation);
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
