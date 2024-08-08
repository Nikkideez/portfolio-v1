import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload, AsciiRenderer } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { MeshStandardMaterial } from 'three';

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useLoader(GLTFLoader, "./Mountain2/scene.gltf");

  // Traverse the scene and set all materials to wireframe
  earth.scene.traverse((child) => {
    if (child.isMesh) {
      child.material = new MeshStandardMaterial({ color: 0xffffff, wireframe: true });
    }
  });

  return (
    <primitive object={earth.scene} scale={1} position-y={0} rotation-y={0} />
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
        near: 0.1,
        far: 200,
        position: [0, 0, -26],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
      {/* Uncomment the AsciiRenderer if you want to use it */}
      {/* <AsciiRenderer fgColor="white" bgColor="#0C0C0C" /> */}
    </Canvas>
  );
};

export default EarthCanvas;