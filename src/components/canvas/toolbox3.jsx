import * as THREE from 'three';
import { useRef, useState, useMemo, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Billboard, Html, TrackballControls, Text } from '@react-three/drei';
import { generate } from 'random-words';

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
                className={`devicon-${iconName} colored clamped-text-3`}
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

function Cloud({ count = 4, radius = 20 }) {
    const iconList = [
        'amazonwebservices-plain-wordmark',
        'anaconda-original',
        'archlinux-plain',
        'azure-original',
        'bash-plain',
        'blender-original',
        'c-plain',
        'centos-plain',
        'cmake-plain',
        'css3-plain',
        'django-plain',
        'djangorest-plain-wordmark',
        'docker-plain',
        'fastapi-original',
        'figma-plain',
        'firebase-original',
        'git-plain',
        'github-original',
        'go-original-wordmark',
        'hadoop-plain',
        'html5-plain',
        'java-plain',
        'javascript-plain',
        'jira-plain',
        'jupyter-plain',
        'keras-plain',
        'kubernetes-plain',
        'linux-plain',
        'nextjs-plain',
        'nginx-original',
        'nodejs-plain',
        'postgresql-plain',
        'python-plain',
        'pytorch-original',
        'rabbitmq-original',
        'redhat-plain',
        'scikitlearn-plain',
        'solidity-plain',
        'tailwindcss-original',
        'tensorflow-original',
        'threejs-original',
        'vuejs-plain',
    ];

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
                temp.push([position, iconList[(i * count + j) % iconList.length]]);
            }
        }
        return temp;
    }, [count, radius]);

    return words.map(([pos, iconName], index) => (
        <Word key={index} position={pos} iconName={iconName} children={iconName.split('-')[0]} />
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
            <Cloud count={8} radius={20} />
        </group>
    );
}

export default function Toolbox() {
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

