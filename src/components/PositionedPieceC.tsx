import React from "react";
import {
    calcTransformedShape,
    PositionedPiece,
} from "../gameCore/positionedPiece";
import { CellC } from "./CellC";

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
    const transformedShape = calcTransformedShape(posPiece);

    return (
        <React.Fragment>
            {transformedShape.rows.flatMap((row, rowIx) =>
                row.map((cell, colIx) =>
                    cell === 0 ? null : (
                        <CellC
                            {...{
                                rowIx,
                                colIx,
                                positionedPiece: posPiece,
                                highlightError,
                                onClick,
                            }}
                        />
                    )
                )
            )}
        </React.Fragment>
    );
}
