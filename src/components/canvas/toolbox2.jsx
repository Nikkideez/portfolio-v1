import * as THREE from 'three';
import { useRef, useState, useMemo, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Billboard, Text, TrackballControls, Svg } from '@react-three/drei';
import { svgMap } from '../../assets/tech/svg'; // Import your SVGs
import { logo, ndlogo1 } from '../../assets'; // Import your images

console.log(logo, ndlogo1);

function Word({ children, iconName, ...props }) {
  // const color = new THREE.Color();
  const fontProps = { font: '/Inter-Bold.woff', fontSize: 2, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false };
  const ref = useRef();
  const iconRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [svgColor, setSVGColor] = useState('#ff0000'); // Start with red
  const [textOpacity, setTextOpacity] = useState(0); // Start with invisible text

  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);

  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])

  useFrame(() => {
    // const targetColor = hovered ? '#00ff00' : '#ff0000'; // Green when hovered, red otherwise
    // const currentColor = new THREE.Color(svgColor);
    // currentColor.lerp(new THREE.Color(targetColor), 0.1); // Interpolate the color
    // setSVGColor(`#${currentColor.getHexString()}`); // Update the color state

    const targetOpacity = hovered ? 1 : 0; // Fully visible when hovered, fully invisible otherwise
    setTextOpacity((prev) => THREE.MathUtils.lerp(prev, targetOpacity, 0.1)); // Interpolate the opacity
  });

  const svgContent = svgMap[iconName];
  const encodedSVG = `data:image/svg+xml;utf8,${encodeURIComponent(svgContent)}`;

  return (
    <Billboard {...props}>
      <Svg
        src={svgMap[iconName]}
        ref={iconRef}
        scale={[0.03, 0.03, 0.03]}
        position={[-2.5, -1, -0.002]}
        onPointerOver={over}
        onPointerOut={out}
        onClick={() => console.log('clicked')}
      />
      <Text
        ref={ref}
        onPointerOver={over}
        onPointerOut={out}
        onClick={() => console.log('clicked')}
        {...fontProps}
        children={children}
        material-opacity={textOpacity}
        material-transparent
      />
    </Billboard>
  );
}

function Cloud({ count = 4, radius = 20 }) {
  const wordList = Object.keys(svgMap); // Use the keys of svgMap as words/icons

  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++) {
      for (let j = 0; j < count; j++) {
        const phi = phiSpan * i;
        const theta = thetaSpan * j;
        spherical.set(radius, phi, theta);
        const position = new THREE.Vector3().setFromSpherical(spherical);
        temp.push([position, wordList[(i * count + j) % wordList.length]]);
      }
    }
    return temp;
  }, [count, radius]);

  return words.map(([pos, iconName], index) => <Word key={index} position={pos} iconName={iconName} children={iconName.replace(/-/g, ' ')} />);
}

function GroupRotation() {
  const sphereRef = useRef();

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += 0.00125;
      sphereRef.current.rotation.y += 0.0025;
    }
  });

  return (
    <group rotation={[50, 10.5, 10]} ref={sphereRef}>
      <Cloud count={8} radius={20} />
    </group>
  );
}

export default function Toolbox() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
      <fog attach="fog" args={['#202025', 0, 80]} />
      <Suspense fallback={null}>
        <GroupRotation />
      </Suspense>
      <TrackballControls noZoom={true} rotateSpeed={4} />
    </Canvas>
  );
}
