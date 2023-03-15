export type Cell = 1 | 0; //0 marks a void in the shape.  1 marks a presence.
type CellRow = Cell[];

export interface Shape {
    id: string;
    rows: CellRow[];
}

export const allShapes: Shape[] = [
    [[1]],
    [[1, 1]],
    [[1, 1, 1]],
    [[1, 1, 1, 1]],
    [[1, 1, 1, 1, 1]],
    [
        [0, 1],
        [1, 1],
    ],
    [
        [0, 1],
        [0, 1],
        [1, 1],
    ],
    [
        [0, 1],
        [0, 1],
        [0, 1],
        [1, 1],
    ],
    [
        [1, 0],
        [1, 1],
        [1, 0],
    ],
    [
        [1, 1],
        [1, 1],
    ],
    [
        [1, 1, 0],
        [0, 1, 1],
    ],
    [
        [1, 0],
        [1, 0],
        [1, 0],
        [1, 1],
        [0, 1],
    ],
    [
        [1, 0],
        [1, 1],
        [1, 1],
    ],

    [
        [1, 1],
        [1, 0],
        [1, 1],
    ],
    [
        [1, 0],
        [1, 0],
        [1, 0],
        [1, 1],
        [0, 1],
    ],
].map((rows, ix) => ({
    rows: rows as CellRow[],
    id: "" + (ix + 1),
}));
