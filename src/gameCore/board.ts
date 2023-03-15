import { PieceColour } from "./piece";
import { Position } from "./position";

export function getStartingPositionForColour(c: PieceColour): Position {
    const lookup = { white: { x: 4, y: 4 }, black: { x: 9, y: 9 } };
    return lookup[c];
}

export const boardWidth = 14;
export const boardHeight = 14;
