import { PieceColour } from "../gameCore/piece";
import { Position } from "../gameCore/position";

interface StartingPositionMarkerCProps {
    position: Position;
    colour: PieceColour;
}

export function StartingPositionMarkerC({
    position,
    colour,
}: StartingPositionMarkerCProps): JSX.Element {
    return (
        <div
            className={"startingPositionMarker " + colour}
            style={{
                gridRow: `${position.y + 1}`,
                gridColumn: `${position.x + 1}`,
            }}
        >
            X
        </div>
    );
}
