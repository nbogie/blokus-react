import { Shape } from "./shape";

export function hFlipShape(shape: Shape): Shape {
    const newRows = shape.rows.map((row) => [...row].reverse());
    const newShape = { ...shape, rows: newRows };
    return newShape;
}

export function vFlipShape(shape: Shape): Shape {
    const newRows = [...shape.rows].reverse();
    const newShape = { ...shape, rows: newRows };
    return newShape;
}
