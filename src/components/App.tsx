import { createPositionedPieceAtRandom } from "../gameCore/positionedPiece";
import { PositionedPieceC } from "./PositionedPieceC";
import "./App.css";
function App() {
    const posPiece = createPositionedPieceAtRandom();

    return (
        <div className="App">
            <div className="gameGrid">
                <PositionedPieceC posPiece={posPiece} />
            </div>
        </div>
    );
}

export default App;
