import { GameState } from "../gameCore/gameState";
import { PassAction } from "./action";

export function doPass(gs: GameState, action: PassAction) {
    gs.hasPassed[gs.nextPieceColour] = true;
    gs.floatingPiece = null;
    gs.nextPieceColour = gs.nextPieceColour === "black" ? "white" : "black";
}
