import { useImmerReducer } from "use-immer";
import { createInitialGameState } from "../gameCore/gameState";
import { reducerFunction } from "../reducer/reducerFunction";
import "./App.css";
import { PositionedPieceC } from "./PositionedPieceC";

function App() {
    const [gameState, dispatch] = useImmerReducer(
        reducerFunction,
        createInitialGameState()
    );

    function rotatePiece(id: string) {
        dispatch({ name: "rotate-piece", pieceId: id });
    }

    return (
        <div className="App">
            <div className="gameGrid">
                {gameState.posPieces.map((posPiece) => (
                    <PositionedPieceC
                        posPiece={posPiece}
                        key={posPiece.piece.id}
                        onClick={rotatePiece}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
