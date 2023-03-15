import {
    calcRealCellPositions,
    pieceOverlapsAny,
} from "../reducer/doPlacePiece";
import { Position } from "./position";
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

    if (
        ownPlacedPieces.length > 0 &&
        !pieceTouchesOwnOnCorner(candidatePiece, ownPlacedPieces)
    ) {
        return false;
    }

    if (
        ownPlacedPieces.length > 0 &&
        pieceTouchesOwnOnSide(candidatePiece, ownPlacedPieces)
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
