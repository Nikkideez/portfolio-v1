import React, { useRef, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Html, TrackballControls } from '@react-three/drei';
import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js';

const table = [
    'H', 'Hydrogen', '1.00794', 1, 1,
    'He', 'Helium', '4.002602', 18, 1,
    'Li', 'Lithium', '6.941', 1, 2,
    // ... continue with the rest of the elements
];

const PeriodicTable = ({ onTransform }) => {
    const { scene } = useThree();
    const objects = useRef([]);
    const targets = useRef({ table: [], sphere: [], helix: [], grid: [] });

    useEffect(() => {
        for (let i = 0; i < table.length; i += 5) {
            // Define positions for table layout
            const object = new THREE.Object3D();
            object.position.x = (table[i + 3] * 140) - 1330;
            object.position.y = -(table[i + 4] * 180) + 990;
            targets.current.table.push(object);

            // Store the initial state object
            objects.current.push(object);
        }

        return () => {
            objects.current.forEach((obj) => scene.remove(obj));
        };
    }, [scene]);

    useEffect(() => {
        onTransform.current = (targetLayout) => {
            objects.current.forEach((object, i) => {
                const target = targets.current[targetLayout][i];
                if (target) {
                    new TWEEN.Tween(object.position)
                        .to({ x: target.position.x, y: target.position.y, z: target.position.z }, 2000)
                        .easing(TWEEN.Easing.Exponential.InOut)
                        .start();
                }
            });
        };
    }, [onTransform]);

    useEffect(() => {
        // Animation loop
        const animate = () => {
            TWEEN.update();
            requestAnimationFrame(animate);
        };
        animate();
        return () => cancelAnimationFrame(animate);
    }, []);

    return (
        <>
            <group >
                {objects.current.map((object, i) => (
                    <Html occlude="blending" key={i} >
                        <div
                            className="element relative w-[120px] h-[160px] shadow-lg border border-opacity-25 font-sans text-center cursor-pointer transition-shadow hover:shadow-xl hover:border-opacity-75"
                            style={{ backgroundColor: `rgba(0,127,127,${Math.random() * 0.5 + 0.25})` }}
                            onClick={() => console.log('.')}
                            position={object.position}
                        >
                            <div className="absolute top-5 right-5 text-xs" style={{ color: 'rgba(127,255,255,0.75)' }}>
                                {(i / 5) + 1}
                            </div>
                            <div className="absolute top-10 left-0 right-0 text-6xl font-bold" style={{ color: 'rgba(255,255,255,0.75)', textShadow: '0 0 10px rgba(0,255,255,0.95)' }}>
                                {table[i * 5]}
                            </div>
                            <div className="absolute bottom-4 left-0 right-0 text-xs" style={{ color: 'rgba(127,255,255,0.75)' }}>
                                {table[i * 5 + 1]}<br />{table[i * 5 + 2]}
                            </div>
                        </div>
                    </Html>
                ))}
            </group>
            <TrackballControls />
        </>
    );
};

const App = () => {
    const onTransform = useRef();

    return (
        <div className="relative w-[1000px] h-[1000px] overflow-hidden">
            <Canvas className="w-full h-full">
                <ambientLight intensity={0.5} />
                <PeriodicTable onTransform={onTransform} />
            </Canvas>
            <div id="menu" className="absolute bottom-5 w-full text-center">
                <button className="text-cyan-500 bg-transparent outline outline-cyan-500 border-0 px-2 py-1 cursor-pointer hover:bg-cyan-500/50 active:text-black active:bg-cyan-500/75"
                    onClick={() => onTransform.current('table')}>TABLE</button>
                <button className="text-cyan-500 bg-transparent outline outline-cyan-500 border-0 px-2 py-1 cursor-pointer hover:bg-cyan-500/50 active:text-black active:bg-cyan-500/75"
                    onClick={() => onTransform.current('sphere')}>SPHERE</button>
                <button className="text-cyan-500 bg-transparent outline outline-cyan-500 border-0 px-2 py-1 cursor-pointer hover:bg-cyan-500/50 active:text-black active:bg-cyan-500/75"
                    onClick={() => onTransform.current('helix')}>HELIX</button>
                <button className="text-cyan-500 bg-transparent outline outline-cyan-500 border-0 px-2 py-1 cursor-pointer hover:bg-cyan-500/50 active:text-black active:bg-cyan-500/75"
                    onClick={() => onTransform.current('grid')}>GRID</button>
            </div>
        </div>
    );
};

export default App;
