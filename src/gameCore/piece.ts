import { Shape } from "./shape";

export interface Piece {
    id: string;
    shape: Shape;
    colour: PieceColour;
}

export type PieceColour = "black" | "white";
