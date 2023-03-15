import { PositionedPiece } from "../gameCore/positionedPiece";

export type Action = PlacePieceAction | ResetGameAction | RotatePieceAction;
export type PlacePieceAction = {
    name: "place-piece";
    positionPiece: PositionedPiece;
};
export type ResetGameAction = { name: "reset-game" };
export type RotatePieceAction = { name: "rotate-piece"; pieceId: string };
