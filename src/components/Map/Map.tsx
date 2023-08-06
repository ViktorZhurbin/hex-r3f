import { Grid, Orientation, defineHex, spiral } from "honeycomb-grid";

// import { state$ } from "../../store/state";
import { getGridSide } from "../../utils/map/getGridSide";
import { MapTile } from "./MapTile";

type MapProps = {
  tribesCount: number;
};

export const Map = ({ tribesCount }: MapProps) => {
  const gridSide = getGridSide(tribesCount);

  const HexTile = defineHex({ orientation: Orientation.POINTY });

  const grid = new Grid(
    HexTile,
    spiral({ radius: gridSide, start: [0, 0] }),
  ).toArray();

  // state$.grid.set(grid);

  return (
    <group rotation-y={Math.PI / 2}>
      {grid.map((hex) => (
        <MapTile hex={hex} key={`${hex.x}_${hex.y}`} />
      ))}
    </group>
  );
};
