import { pick } from "../utils/pick";

export type Rotation = 0 | 1 | 2 | 3;
export const allRotations = [0, 1, 2, 3] as Rotation[];

export function randomRotation(): Rotation {
    return pick([0, 1, 2, 3]) as Rotation;
}
