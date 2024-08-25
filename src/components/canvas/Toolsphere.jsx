import * as THREE from 'three';
import { useRef, useState, useMemo, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Billboard, Html, TrackballControls, Text } from '@react-three/drei';
import { iconList } from '../../constants'

function Icon({ iconName, hovered, onPointerOver, onPointerOut, onClick, ...props }) {
    return (
        <Html
            {...props}
            // center
            prepend
            occlude="blending"
            // onPointerOver={onPointerOver}
            // onPointerOut={onPointerOut}
            castShadow={false}
            receiveShadow={false}
            distanceFactor={50}
        // material={<meshPhysicalMaterial side={DoubleSide} opacity={0.1} />}
        >
            <i
                className={`${iconName} colored clamped-text-3`}
                // style={{ fontSize: '58px' }}
                onMouseOver={onPointerOver}
                onMouseOut={onPointerOut}
            />
        </Html>
    );
}

function Word({ children, iconName, ...props }) {
    const fontProps = { font: '/Inter-Bold.woff', fontSize: 2, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false };
    const ref = useRef();
    const [hovered, setHovered] = useState(false);
    const [textOpacity, setTextOpacity] = useState(0); // Start with invisible text

    const over = (e) => (e.stopPropagation(), setHovered(true));
    const out = () => setHovered(false);

    useEffect(() => {
        if (hovered) document.body.style.cursor = 'pointer';
        return () => (document.body.style.cursor = 'auto');
    }, [hovered]);

    useFrame(() => {
        const targetOpacity = hovered ? 1 : 0; // Fully visible when hovered, fully invisible otherwise
        setTextOpacity((prev) => THREE.MathUtils.lerp(prev, targetOpacity, 0.1)); // Interpolate the opacity
    });

    return (
        <Billboard {...props}>
            <Icon
                iconName={iconName}
                hovered={hovered}
                onPointerOver={over}
                onPointerOut={out}
                onClick={() => console.log('clicked')}
                position={[-1.5, -1, 0]}
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

function Cloud({ radius = 20 }) {
    const keys = Object.keys(iconList);

    const words = useMemo(() => {
        const temp = [];
        const count = Math.ceil(Math.sqrt(keys.length));
        const spherical = new THREE.Spherical();
        const phiSpan = Math.PI / (count + 1);
        const thetaSpan = (Math.PI * 2) / count;
        let index = 0;
        for (let i = 1; i < count + 1; i++) {
            for (let j = 0; j < count; j++) {
                const phi = phiSpan * i;
                const theta = thetaSpan * j;
                spherical.set(radius, phi, theta);
                if (index === keys.length) index = 0;
                const position = new THREE.Vector3().setFromSpherical(spherical);
                temp.push([position, iconList[keys[index]][0]]);
                index++;
            }
        }
        return temp;
    }, [radius]);

    return words.map(([pos, iconName], index) => (
        <Word key={index} position={pos} iconName={iconName} children={iconName.split('-')[1]} />
    ));
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
            <Cloud radius={20} />
        </group>
    );
}

export default function Toolsphere() {
    return (
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }} frameloop='demand' >
            <fog attach="fog" args={['#202025', 0, 80]} />
            <Suspense fallback={null}>
                <GroupRotation />
            </Suspense>
            <TrackballControls noZoom={true} rotateSpeed={4} />
        </Canvas>
    );
}

