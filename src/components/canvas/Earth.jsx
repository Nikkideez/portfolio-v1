import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, AsciiRenderer, Wireframe } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { geometry } from "maath";

const Earth = () => {
  const gltf = useGLTF("./Hat/scene.gltf");
  console.log(gltf)
  // const [meshGeometry, setMeshGeometry] = useState(null);

  const getMeshGeometry = () => {
    // Loop through the nodes to find the mesh node
    for (const key in gltf.nodes) {
      console.log(key)
      if (gltf.nodes[key].isMesh) {
        // Assuming you only need the first mesh node
        return gltf.nodes[key].geometry;
      }
    }
    return null
  }

  const meshGeometry = getMeshGeometry();

  console.log(meshGeometry)

  return (
    // <primitive object={earth.scene} scale={1} position-y={0} rotation-y={0} />
    <Wireframe
      geometry={meshGeometry}
      simplify={true}
      fill={"white"}
      fillMix={2}
      fillOpacity={0.1}
      stroke={"white"}
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 1,
        far: 200,
        position: [0, 0, -4]
        
      }}
    >
      {/* <color attach='background' args={["black"]} /> */}
      <Suspense fallback={<CanvasLoader />} >
        <group rotation={[1.1, 10.5, 1]}>
          <OrbitControls
            autoRotate
            enableZoom={true}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />

          <Preload all />
        </group>
      </Suspense>
      {/* <AsciiRenderer fgColor="white" bgColor="#0C0C0C"/> */}
    </Canvas>
  );
};

export default EarthCanvas;
