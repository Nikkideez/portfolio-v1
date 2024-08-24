import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Float, Preload, useGLTF, Wireframe } from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Canvasloader";

const Model = ({ ...props }) => {
  const gltf = useGLTF("./face/scene.gltf");
  const modelRef = useRef();
  const { pointer, viewport } = useThree();

  // Function to get the mesh geometry
  const getMeshGeometry = () => {
    for (const key in gltf.nodes) {
      if (gltf.nodes[key].isMesh) {
        return gltf.nodes[key].geometry;
      }
    }
    return null;
  };

  const geometry = getMeshGeometry();

  // Function to update model's rotation based on mouse position
  useFrame(() => {
    if (modelRef.current) {
      const x = (pointer.x * viewport.width) / 2;
      const y = (pointer.y * viewport.height) / 2;
      // console.log(modelRef.current.rotation)
      modelRef.current.lookAt(new THREE.Vector3(x, y, 9));
    }
  });

  return (
    <group ref={modelRef} position={[0, -0.6, 3]} scale={0.1}>
      <Float
        // rotation={[0, -1.4, 0]}
        // position={[0, -1.8, -2]}
        
        // matrixAutoUpdate={true}
        autoInvalidate
      >
        <Wireframe
          geometry={geometry}
          simplify={true}
          fill={"#3a486f"}
          fillOpacity={0.9}
          stroke={"white"}
          fillMix={1}
        />
      </Float>
    </group>
  );
};

const Face = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 1,
        far: 200,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Model />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default Face;
