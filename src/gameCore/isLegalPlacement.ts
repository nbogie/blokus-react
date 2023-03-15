import {
    calcRealCellPositions,
    pieceOverlapsAny,
} from "../reducer/doPlacePiece";
import { getStartingPositionForColour } from "./board";
import { areSamePosition, Position } from "./position";
import { PositionedPiece } from "./positionedPiece";

export function isLegalPlacement(
    candidatePiece: PositionedPiece,
    positionedPieces: PositionedPiece[]
): boolean {
    if (pieceOverlapsAny(candidatePiece, positionedPieces)) {
        return false;
    }
    const ownPlacedPieces = positionedPieces.filter(
        (ppos) => ppos.piece.colour === candidatePiece.piece.colour
    );
    const isFirstPieceOfItsColour = ownPlacedPieces.length === 0;

    if (
        !isFirstPieceOfItsColour &&
        !pieceTouchesOwnOnCorner(candidatePiece, ownPlacedPieces)
    ) {
        return false;
    }

    if (pieceTouchesOwnOnSide(candidatePiece, ownPlacedPieces)) {
        return false;
    }
    if (
        isFirstPieceOfItsColour &&
        !pieceOverlapsItsStartSquare(candidatePiece)
    ) {
        return false;
    }

    return true;
}
function pieceTouchesOwnOnCorner(
    candidatePiece: PositionedPiece,
    ownPlacedPieces: PositionedPiece[]
) {
    return (
        ownPlacedPieces.length === 0 ||
        ownPlacedPieces.some((ppos) =>
            piecesTouchOnCorner(candidatePiece, ppos)
        )
    );
}

function pieceTouchesOwnOnSide(
    candidatePiece: PositionedPiece,
    ownPlacedPieces: PositionedPiece[]
) {
    return ownPlacedPieces.some((placedPiece) =>
        piecesTouchOnSide(candidatePiece, placedPiece)
    );
}

/** Return true if at least one cell from each piece are diagonally next to each other.  Doesn't check for piece intersection or other rules.*/
function piecesTouchOnCorner(a: PositionedPiece, b: PositionedPiece): boolean {
    const cellPositionsA = calcRealCellPositions(a);
    const cellPositionsB = calcRealCellPositions(b);
    return cellPositionsA.some((posA) =>
        cellPositionsB.some((posB) =>
            areDiagonallyTouchingPositions(posA, posB)
        )
    );
}

export function areDiagonallyTouchingPositions(
    posA: Position,
    posB: Position
): boolean {
    const deltaX = posA.x - posB.x;
    const deltaY = posA.y - posB.y;
    return Math.abs(deltaX) === 1 && Math.abs(deltaY) === 1;
}

/** Return true if at least one cell from each piece are orthogonally adjacent to each other.  Doesn't check for piece intersection or other rules.*/
function piecesTouchOnSide(a: PositionedPiece, b: PositionedPiece): boolean {
    const cellPositionsA = calcRealCellPositions(a);
    const cellPositionsB = calcRealCellPositions(b);
    return cellPositionsA.some((pA) =>
        cellPositionsB.some((pB) => areAdjacentPositions(pA, pB))
    );
}

function areAdjacentPositions(a: Position, b: Position): boolean {
    const deltaX = a.x - b.x;
    const deltaY = a.y - b.y;

    return (
        (deltaX === 0 && Math.abs(deltaY) === 1) ||
        (deltaY === 0 && Math.abs(deltaX) === 1)
    );
}

function pieceOverlapsItsStartSquare(candidatePiece: PositionedPiece): boolean {
    const startPos = getStartingPositionForColour(candidatePiece.piece.colour);
    const cellPositions = calcRealCellPositions(candidatePiece);
    return cellPositions.some((p) => areSamePosition(p, startPos));
}
