import { PieceColour } from "../gameCore/piece";
import { PositionedPiece } from "../gameCore/positionedPiece";

type Direction = { x: number; y: number };

export type Action =
    | AddRandomPieceFloatingAction
    | MoveFloatingPieceAction
    | RotateFloatingPieceAction
    | PlacePieceAction
    | HFlipFloatingPieceAction
    | ResetGameAction;
export type PlacePieceAction = {
    name: "place-piece";
    positionPiece: PositionedPiece;
};
export type ResetGameAction = { name: "reset-game" };
export type AddRandomPieceFloatingAction = {
    name: "add-random-piece-floating";
    pieceColour: PieceColour;
};
export type RotateFloatingPieceAction = { name: "rotate-floating-piece" };
export type HFlipFloatingPieceAction = { name: "hflip-floating-piece" };
export type VFlipFloatingPieceAction = { name: "vflip-floating-piece" };
export type MoveFloatingPieceAction = {
    name: "move-floating-piece";
    direction: Direction;
};
