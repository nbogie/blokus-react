import { useImmerReducer } from "use-immer";
import { getStartingPositionForColour } from "../gameCore/board";
import { createInitialGameState } from "../gameCore/gameState";
import { isLegalPlacement } from "../gameCore/isLegalPlacement";
import { reducerFunction } from "../reducer/reducerFunction";
import "./App.css";
import { ControlButtons } from "./ControlButtons";
import { PieceChoicesC } from "./PieceChoicesC";
import { PlayedPieces } from "./PlayedPieces";
import { PositionedPieceC } from "./PositionedPieceC";
import { StartingPositionMarkerC } from "./StartingPositionMarkerC";

function App() {
    const [gameState, dispatch] = useImmerReducer(
        reducerFunction,
        createInitialGameState()
    );

    return (
        <div className="App">
            <PieceChoicesC
                pieceColour={"black"}
                remainingPieces={gameState.piecesLeft["black"]}
                dispatch={dispatch}
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
            />

            <ControlButtons dispatch={dispatch} gameState={gameState} />
        </div>
    );
}

export default App;
