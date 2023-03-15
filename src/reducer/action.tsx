import { PieceColour } from "../gameCore/piece";
import { PositionedPiece } from "../gameCore/positionedPiece";

type Direction = { x: number; y: number };

export type Action =
    | AddRandomPieceFloatingAction
    | MoveFloatingPieceAction
    | RotateFloatingPieceAction
    | PlacePieceAction
    | ResetGameAction
    | RotatePieceAction;

export type PlacePieceAction = {
    name: "place-piece";
    positionPiece: PositionedPiece;
};
export type ResetGameAction = { name: "reset-game" };
export type RotateFloatingPieceAction = { name: "rotate-floating-piece" };
export type RotatePieceAction = { name: "rotate-piece"; pieceId: string };
export type AddRandomPieceFloatingAction = {
    name: "add-random-piece-floating";
    pieceColour: PieceColour;
};
export type MoveFloatingPieceAction = {
    name: "move-floating-piece";
    direction: Direction;
};
