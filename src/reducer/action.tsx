import { PieceColour } from "../gameCore/piece";
import { PositionedPiece } from "../gameCore/positionedPiece";

type Direction = { x: number; y: number };

export type Action =
    | MoveFloatingPieceAction
    | RotateFloatingPieceAction
    | PlacePieceAction
    | FlipFloatingPieceAction
    | ResetGameAction
    | PassAction
    | SelectFloatingPieceAction;

export type SelectFloatingPieceAction = {
    name: "select-floating-piece";
    pieceId: string;
    colour: PieceColour;
};

export type PlacePieceAction = {
    name: "place-piece";
    positionPiece: PositionedPiece;
};
export type ResetGameAction = { name: "reset-game" };
export type PassAction = { name: "pass" };
export type RotateFloatingPieceAction = { name: "rotate-floating-piece" };
export type FlipFloatingPieceAction = {
    name: "flip-floating-piece";
    flipDirection: "horizontal" | "vertical";
};
export type MoveFloatingPieceAction = {
    name: "move-floating-piece";
    direction: Direction;
};
