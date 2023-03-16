import { Dispatch } from "react";
import { createAllPieces } from "../gameCore/createPositionedPiecesAtRandom";
import { Piece, PieceColour } from "../gameCore/piece";
import { Position } from "../gameCore/position";
import { PositionedPiece } from "../gameCore/positionedPiece";
import { ShapeId } from "../gameCore/shape";
import { Action } from "../reducer/action";
import { PositionedPieceC } from "./PositionedPieceC";

interface PieceChoicesCProps {
    remainingPieces: Piece[];
    pieceColour: PieceColour;
    dispatch: Dispatch<Action>;
}
export function PieceChoicesC({
    remainingPieces,
    pieceColour,
    dispatch,
}: PieceChoicesCProps) {
    const positionedPieces = positionedPiecesForSide(pieceColour);

    return (
        <div className={"pieceChoices " + pieceColour}>
            {positionedPieces.map((p) =>
                remainingPieces.find((rp) => rp.id === p.piece.id) ? (
                    <PositionedPieceC
                        key={p.piece.id}
                        posPiece={p}
                        onClick={() => {
                            dispatch({
                                name: "select-floating-piece",
                                pieceId: p.piece.id,
                                colour: p.piece.colour,
                            });
                        }}
                        highlightError={false}
                    />
                ) : (
                    <div></div>
                )
            )}
        </div>
    );
}

function positionedPiecesForSide(colour: PieceColour): PositionedPiece[] {
    const shapeIdsWithPositions: [ShapeId, Position][] = [
        ["1", { x: 0, y: 0 }],
        ["2", { x: 2, y: 0 }],
        ["3", { x: 0, y: 2 }],
        ["4", { x: 0, y: 4 }],
        ["5", { x: 0, y: 6 }],
        ["6", { x: 4, y: 1 }],
        ["7", { x: 2, y: 9 }],
        ["8", { x: 5, y: 5 }],
        ["9", { x: 0, y: 8 }],
        ["10", { x: 0, y: 13 }],
        ["11", { x: 3, y: 15 }],
        ["12", { x: 5, y: 10 }],
        ["13", { x: 0, y: 16 }],
        ["14", { x: 0, y: 20 }],
        ["15", { x: 5, y: 18 }],
        ["16", { x: 2, y: 21 }],
        ["17", { x: 4, y: 26 }],
        ["18", { x: 0, y: 26 }],
        ["19", { x: 1, y: 29 }],
        ["20", { x: 1, y: 32 }],
        ["21", { x: 4, y: 33 }],
    ];
    return shapeIdsWithPositions.map(([shapeId, position]) =>
        createPositionedPiece(shapeId, position, colour)
    );
}

function createPositionedPiece(
    shapeId: ShapeId,
    position: Position,
    colour: PieceColour
): PositionedPiece {
    return {
        piece: getPieceByShapeIdAndColour(shapeId, colour),
        position,
        rotation: 0,
        isFlipped: false,
    };
}
function getPieceByShapeIdAndColour(
    shapeId: string,
    colour: PieceColour
): Piece {
    const allPieces = createAllPieces();
    return allPieces.find(
        (p) => p.shape.id === shapeId && p.colour === colour
    )!;
}
