
import React, { forwardRef, Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Float, Preload, useGLTF, Wireframe, MotionPathControls, useMotion } from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Loader";

export const Infinity = () => {
  const curves = []
  // Define the center and radius of the circle
  const centerX = -3
  const centerY = 4
  const radius = 5

  // Define the number of segments and the amplitude of the sine wave
  const segments = 8
  const amplitude = 15

  // Create each segment
  for (let i = 0; i < segments; i++) {
    // Calculate the start and end angles
    const startAngle = (i / segments) * Math.PI * 2
    const endAngle = ((i + 1) / segments) * Math.PI * 2

    // Calculate the start and end points
    const startPoint = new THREE.Vector3(
      centerX + radius * Math.cos(startAngle),
      centerY + amplitude * Math.sin(2 * startAngle),
      radius * Math.sin(startAngle)
    )
    const endPoint = new THREE.Vector3(
      centerX + radius * Math.cos(endAngle),
      centerY + amplitude * Math.sin(2 * endAngle),
      radius * Math.sin(endAngle)
    )

    // Calculate the control points
    const controlPoint1 = new THREE.Vector3(
      centerX + radius * Math.cos(startAngle + Math.PI / (2 * segments)),
      centerY + amplitude * Math.sin(2 * (startAngle + Math.PI / (2 * segments))),
      radius * Math.sin(startAngle + Math.PI / (2 * segments))
    )
    const controlPoint2 = new THREE.Vector3(
      centerX + radius * Math.cos(endAngle - Math.PI / (2 * segments)),
      centerY + amplitude * Math.sin(2 * (endAngle - Math.PI / (2 * segments))),
      radius * Math.sin(endAngle - Math.PI / (2 * segments))
    )

    curves.push([startPoint, controlPoint1, controlPoint2, endPoint])
  }

  return curves.map(([v0, v1, v2, v3], index) => <cubicBezierCurve3 key={index} v0={v0} v1={v1} v2={v2} v3={v3} />)
}


function Loop({ factor = 0.2 }) {
  const motion = useMotion()
  useFrame((state, delta) => (motion.current += Math.min(0.1, delta) * factor))
}

const Model = forwardRef(({ ...props }, ref) => {

  const gltf = useGLTF("./paperplane2/paper_plane.glb");
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
    if (ref.current && !props.flying) {
      const x = (pointer.x * viewport.width) / 2;
      const y = (pointer.y * viewport.height) / 2;
      // console.log(modelRef.current.rotation)
      ref.current.lookAt(new THREE.Vector3(3, 9, -x));
    }
  });

  return (
    <>
    {props.flying ? <MotionPathControls focus={ref} damping={0.2} focusDamping={0.15}>
      <Infinity/>
      {/* <Rollercoaster/> */}
      {/* <Heart/> */}
      {/* <Circle centerY={1}/> */}
      <Loop factor={0.1}/>
    </MotionPathControls>
    :
    null 
    }
    <group ref={ref} position={[0, 0, 0]} scale={1}>
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
    </>
  );
});

const Face = () => {
  const modelRef = useRef();
    const [flying, setFlying] = React.useState(false);

  const handleCanvasClick = () => {
    console.log("Flying");
    setFlying(!flying);
    // setTimeout(() => setFlying(false), 30000); // Set flying to false after 20 seconds
  };

  return (
    <Canvas
      onClick={handleCanvasClick}
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 1,
        far: 200,
      }}
      className="hover:cursor-pointer"
    >
      <Suspense fallback={<CanvasLoader />}>
        <Model ref={modelRef} flying={flying}/>
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default Face;
