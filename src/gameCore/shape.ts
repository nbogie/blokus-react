export type Cell = 1 | 0; //0 marks a void in the shape.  1 marks a presence.
type CellRow = Cell[];

export type ShapeId = string;
export interface Shape {
    id: ShapeId;
    rows: CellRow[];
}

export const allShapes: Shape[] = [
    [[1]], //1
    [[1, 1]], //2
    [[1, 1, 1]], //3
    [[1, 1, 1, 1]], //4
    [[1, 1, 1, 1, 1]], //5
    [
        [0, 1],
        [1, 1],
    ], //6
    [
        [0, 1],
        [0, 1],
        [1, 1],
    ], //7
    [
        [0, 1],
        [0, 1],
        [0, 1],
        [1, 1],
    ], //8
    [
        [1, 0],
        [1, 1],
        [1, 0],
    ], //9
    [
        [1, 1],
        [1, 1],
    ], //10
    [
        [1, 1, 0],
        [0, 1, 1],
    ], //11
    [
        [1, 0],
        [1, 0],
        [1, 1],
        [1, 0],
    ], //12
    [
        [1, 0],
        [1, 1],
        [1, 1],
    ], //13

    [
        [1, 1],
        [1, 0],
        [1, 1],
    ], //14
    [
        [1, 0],
        [1, 0],
        [1, 1],
        [0, 1],
    ], //15
    [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 1],
    ], //16
    [
        [0, 1, 0],
        [1, 1, 1],
        [0, 1, 0],
    ], //17
    [
        [0, 0, 1],
        [1, 1, 1],
        [0, 1, 0],
    ], //18
    [
        [0, 0, 1],
        [1, 1, 1],
        [1, 0, 0],
    ], //19
    [
        [0, 0, 1],
        [0, 1, 1],
        [1, 1, 0],
    ], //20
    [
        [0, 0, 1],
        [0, 0, 1],
        [1, 1, 1],
    ], //21
].map((rows, ix) => ({
    rows: rows as CellRow[],
    id: "" + (ix + 1),
}));

export function getShapeById(soughtId: ShapeId): Shape {
    return allShapes.find((s) => s.id === soughtId)!;
}

/**  Count the number of cells (filled squares) in a given shape */
export function countCellsInShape(shape: Shape): number {
    return shape.rows.flatMap((row) => row).filter((cell) => cell === 1).length;
}
