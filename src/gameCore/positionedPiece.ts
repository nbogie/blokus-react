import { Piece } from "./piece";
import { Position } from "./position";
import { Rotation } from "./rotation";

export interface PositionedPiece {
    piece: Piece;
    position: Position;
    rotation: Rotation;
    isFlipped: boolean;
}
