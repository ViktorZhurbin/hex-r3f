import type { ThreeEvent } from "@react-three/fiber";
import { state$ } from "../../state";
import { useHexByUnitId } from "../../state/selectors/map";
import type { UnitInstance } from "../../types/Unit";
import { onSelectTile } from "../WorldMap/onSelectTile";
import { Scout } from "../models/Scout";

type UnitProps = {
	unitId: UnitInstance["id"];
};

export const Unit = ({ unitId }: UnitProps) => {
	console.log("Unit rendered");

	const hex = useHexByUnitId(unitId);
	const hexId = state$.mappings.unitIdToHexId[unitId].get();

	return (
		<Scout
			position={[hex.x, 0, hex.y]}
			onClick={(event: ThreeEvent<MouseEvent>) => {
				event.stopPropagation();
				onSelectTile(hexId);
			}}
		/>
	);
};
