import { pick } from "../utils/pick";

export interface Position {
    x: number;
    y: number;
}

export function randomPosition(): Position {
    return {
        x: pick([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]),
        y: pick([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]),
    };
}
