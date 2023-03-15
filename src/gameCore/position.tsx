import { boardHeight, boardWidth } from "./board";

export interface Position {
    x: number;
    y: number;
}

export function randomPosition(
    maxX: number = boardWidth - 1,
    maxY: number = boardHeight - 1
): Position {
    return {
        x: Math.floor(Math.random() * (maxX + 1)),
        y: Math.floor(Math.random() * (maxY + 1)),
    };
}

export function randomPositionFitting(dim: {
    width: number;
    height: number;
}): Position {
    const p = randomPosition(boardWidth - dim.width, boardHeight - dim.height);
    return p;
}

export function addToPosition(p: Position, dir: { x: number; y: number }) {
    return {
        x: p.x + dir.x,
        y: p.y + dir.y,
    };
}

export function areSamePosition(a: Position, b: Position): boolean {
    return a.x === b.x && a.y === b.y;
}
