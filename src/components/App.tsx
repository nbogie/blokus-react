import { createPositionedPiecesAtRandom } from "../gameCore/positionedPiece";
import "./App.css";
import { PositionedPieceC } from "./PositionedPieceC";
function App() {
    const posPieces = createPositionedPiecesAtRandom();

    return (
        <div className="App">
            <div className="gameGrid">
                {posPieces.map((posPiece) => (
                    <PositionedPieceC
                        posPiece={posPiece}
                        key={posPiece.piece.id}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
