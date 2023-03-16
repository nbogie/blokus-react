import { useImmerReducer } from "use-immer";
import { getStartingPositionForColour } from "../gameCore/board";
import { createInitialGameState, GameState } from "../gameCore/gameState";
import { isLegalPlacement } from "../gameCore/isLegalPlacement";
import { allPieceColours } from "../gameCore/piece";
import { reducerFunction } from "../reducer/reducerFunction";
import "./App.css";
import { ControlButtons } from "./ControlButtons";
import { PieceChoicesC } from "./PieceChoicesC";
import { PlayedPieces } from "./PlayedPieces";
import { PositionedPieceC } from "./PositionedPieceC";
import { ScoringC } from "./ScoringC";
import { StartingPositionMarkerC } from "./StartingPositionMarkerC";

function App() {
    const [gameState, dispatch] = useImmerReducer(
        reducerFunction,
        createInitialGameState()
    );

    function isGameOver(gameState: GameState) {
        return allPieceColours.every(
            (colour) =>
                gameState.hasPassed[colour] ||
                gameState.piecesLeft[colour].length === 0
        );
    }

    return (
        <div className="App">
            <PieceChoicesC
                pieceColour={"black"}
                remainingPieces={gameState.piecesLeft["black"]}
                dispatch={dispatch}
                isActive={gameState.nextPieceColour === "black"}
                passed={gameState.hasPassed["black"]}
            />

            <div className="gameGrid">
                <PlayedPieces gameState={gameState} />

                {gameState.floatingPiece && (
                    <PositionedPieceC
                        posPiece={gameState.floatingPiece}
                        onClick={() => {}}
                        highlightError={
                            !isLegalPlacement(
                                gameState.floatingPiece,
                                gameState.positionedPieces
                            )
                        }
                    />
                )}
                <StartingPositionMarkerC
                    colour={"white"}
                    position={getStartingPositionForColour("white")}
                />
                <StartingPositionMarkerC
                    colour={"black"}
                    position={getStartingPositionForColour("black")}
                />
            </div>
            <PieceChoicesC
                pieceColour={"white"}
                remainingPieces={gameState.piecesLeft["white"]}
                dispatch={dispatch}
                isActive={gameState.nextPieceColour === "white"}
                passed={gameState.hasPassed["white"]}
            />

            <ControlButtons dispatch={dispatch} gameState={gameState} />

            <div className="footer">
                {isGameOver(gameState) && (
                    <div>
                        Game Over!
                        <ScoringC gameState={gameState} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
