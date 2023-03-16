import { GameState } from "../gameCore/gameState";
import { scoreGame } from "../gameCore/scoreGame";

export function ScoringC(props: { gameState: GameState }): JSX.Element {
    const scores = scoreGame(props.gameState);
    return (
        <div className="scoring">
            Black: {scores.black}
            <br />
            White: {scores.white}
        </div>
    );
}
