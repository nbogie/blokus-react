import { useState } from "react";
import { createPositionedPiecesAtRandom } from "../gameCore/createPositionedPiecesAtRandom";
import { PositionedPiece } from "../gameCore/positionedPiece";
import { Rotation } from "../gameCore/rotation";
import "./App.css";
import { PositionedPieceC } from "./PositionedPieceC";

function App() {
    const [posPieces, setPosPieces] = useState<PositionedPiece[]>(
        createPositionedPiecesAtRandom(6)
    );

    function rotatePiece(id: string) {
        const newPieces: PositionedPiece[] = posPieces.map((posPiece) => {
            if (posPiece.piece.id === id) {
                const rotated: PositionedPiece = {
                    ...posPiece,
                    rotation: ((posPiece.rotation + 1) % 4) as Rotation,
                };
                console.log({ posPiece, rotated });
                return rotated;
            }
            return posPiece;
        });
        setPosPieces(newPieces);
    }

    return (
        <div className="App">
            <div className="gameGrid">
                {posPieces.map((posPiece) => (
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
