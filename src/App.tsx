import { enableReactUse } from "@legendapp/state/config/enableReactUse";
import { MapControls } from "@react-three/drei/core/MapControls";
import { Canvas } from "@react-three/fiber";
import { Units } from "./components/Units/Units";
import { WorldMap } from "./components/WorldMap/WorldMap";
import { initMap } from "./utils/map/initMap";

enableReactUse();
initMap();

const App = () => (
	<Canvas camera={{ fov: 40, position: [10, 10, 0] }}>
		<ambientLight />

		<WorldMap />
		<Units />

		{/* map-like camera controls */}
		<MapControls
			// enableRotate={false}
			makeDefault
			maxDistance={50}
			minDistance={5}
			minZoom={10}
			panSpeed={2}
		/>
	</Canvas>
);

export default App;
