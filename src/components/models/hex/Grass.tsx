import { useGLTF } from "@react-three/drei";
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/hex/grass.glb --output src/components/models/hex/Grass.tsx --types 
*/
import type * as THREE from "three";
import type { GLTF } from "three-stdlib";
import grass from "/models/hex/grass.glb";

type GLTFResult = GLTF & {
	nodes: {
		grass_1: THREE.Mesh;
	};
	materials: {
		colormap: THREE.MeshStandardMaterial;
	};
	// animations: GLTFAction[];
};

export function Grass(props: JSX.IntrinsicElements["group"]) {
	const { nodes, materials } = useGLTF(grass) as GLTFResult;

	return (
		<group {...props} dispose={null}>
			<mesh geometry={nodes.grass_1.geometry} material={materials.colormap}>
				{props.children}
			</mesh>
		</group>
	);
}

useGLTF.preload(grass);