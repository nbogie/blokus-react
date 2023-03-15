import { Rotation } from "./rotation";
import { Cell, Shape } from "./shape";

/* 
[ 'O', 'L' ]
[ '.', 'L' ]
[ '.', '.' ]
expected rot90
[ '.', '.', 'O' ]
[ '.', 'L', 'L' ]
*/

//Some ways to rotate a two dimensional array:
//https://stackoverflow.com/questions/42519/how-do-you-rotate-a-two-dimensional-array
/** Return a new shape representing the given one rotated 90 degrees clockwise.
 *
 * Doesn't mutate original.
 */
export function rotateShape90CW(shape: Shape): Shape {
    const newShape = transpose(shape);
    newShape.rows.forEach((r) => r.reverse());
    return newShape;
}

export function rotateShape90CCW(shape: Shape): Shape {
    const newShape: Shape = copyShape(shape);
    newShape.rows.forEach((r) => r.reverse());
    return transpose(newShape);
}

/** Return a new shape representing the given one rotated clockwise in increments of 90 degrees as specified.
 * @param  rotation - A number of increments of 90 degrees by which to rotate new shape.
 *
 * Doesn't mutate original.
 */
export function rotateShapeCW(shape: Shape, rotation: Rotation): Shape {
    let newShape = copyShape(shape); //in case we rotate 0 times - we still want to return a copy to be consistent
    for (let i = 0; i < rotation; i++) {
        newShape = rotateShape90CW(newShape);
    }
    return newShape;
}

/** Return a new shape based on the given shape but with the rows and columns transposed.  So rows become columns.
 * This does not mutate the oriinal shape.
 */
function transpose(shape: Shape): Shape {
    const newRows: Cell[][] = [];
    for (let colIx = 0; colIx < shape.rows[0].length; colIx++) {
        const newRow: Cell[] = [];
        for (let rowIx = 0; rowIx < shape.rows.length; rowIx++) {
            newRow.push(shape.rows[rowIx][colIx]);
        }
        newRows.push(newRow);
    }
    return { ...shape, rows: newRows };
}

function copyShape(shape: Shape): Shape {
    const newRows = shape.rows.map((r) => [...r]);
    return { ...shape, rows: newRows };
}
