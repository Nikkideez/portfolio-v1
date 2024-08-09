import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Wireframe } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = ({ geometry }) => {
  return (
    <Wireframe
      geometry={geometry}
      simplify={true}
      fill={"#373737"}
      // fillMix={1}
      fillOpacity={0.9}
      stroke={"white"}
    />
  );
};

const EarthCanvas = () => {
  const gltfFiles = [
    "./Hat/scene.gltf",
    "./Mountain2/scene.gltf",
    "./face/scene.gltf", // Add more paths here
  ];

  const cameraConfigs = [
    { position: [0, 0.1, 0], rotation: [1.1, 10.5, 10], scale: 1.6 }, // Config for the first model
    { position: [0, 0, 0], rotation: [0, 0, 0], scale: 2 }, // Config for the second model
    { position: [0, -1.4, 0], rotation: [0,0,0], scale: 0.25 }, // Config for the third model
    // Add more configurations here
  ];

  const [currentGeometry, setCurrentGeometry] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const meshRef = useRef();
  console.log(meshRef)

  const gltfs = gltfFiles.map((file) => useGLTF(file));

  const getMeshGeometry = (gltf) => {
    for (const key in gltf.nodes) {
      if (gltf.nodes[key].isMesh) {
        return gltf.nodes[key].geometry;
      }
    }
    return null;
  };

  useEffect(() => {
    // Set the initial geometry and camera configuration
    setCurrentGeometry(getMeshGeometry(gltfs[currentIndex]));

    // Start a loop that switches the geometry and camera every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % gltfs.length;
        setCurrentGeometry(getMeshGeometry(gltfs[nextIndex]));

        return nextIndex;
      });
    }, 5000); // Switch every 5 seconds

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, [gltfs]);

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
        // position: cameraConfigs[currentIndex].position, // Set initial camera position
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <group 
        rotation={cameraConfigs[currentIndex].rotation} 
        position={cameraConfigs[currentIndex].position} 
        scale={cameraConfigs[currentIndex].scale}
        ref={meshRef}
        >
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          {currentGeometry && <Earth geometry={currentGeometry} />}
          <Preload all />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
