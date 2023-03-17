import React from "react";
import { useDrag } from "react-dnd";
import { DnDItemTypes } from "../dndItemTypes";
import { PositionedPiece } from "../gameCore/positionedPiece";

interface CellCProps {
    rowIx: number;
    colIx: number;
    positionedPiece: PositionedPiece;
    highlightError: boolean;
    onClick: (id: string) => void;
}
export function CellC(props: CellCProps) {
    const { rowIx, colIx, positionedPiece, highlightError, onClick } = props;
    const piece = positionedPiece.piece;
    const { colour } = piece;
    const { position } = positionedPiece;

    const [{ isDragging }, dragRef] = useDrag(() => ({
        type: DnDItemTypes.BLOCK,
        collect: (monitor) => {
            console.log("collect running");
            return {
                isDragging: !!monitor.isDragging(),
            };
        },
    }));

    return (
        <div
            ref={dragRef}
            className={
                "pieceSquare " +
                colour +
                (highlightError ? " error" : "") +
                (isDragging ? " dragging" : "")
            }
            key={piece.id + "_" + colIx + "_" + rowIx}
            style={{
                gridRow: `${position.y + rowIx + 1}`,
                gridColumn: `${position.x + colIx + 1}`,
            }}
            onClick={() => onClick(piece.id)}
        ></div>
    );
}
