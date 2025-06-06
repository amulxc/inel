"use client";
import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { Clone } from '@react-three/drei';
import { VEHICLE_HOTSPOTS } from './constants';

// Cache for loaded models
const modelCache = new Map();

function Model({ url }) {
  const { scene } = useGLTF(url);
  
  useEffect(() => {
    if (!modelCache.has(url)) {
      modelCache.set(url, scene);
    }
  }, [url, scene]);

  return <Clone object={scene} />;
}

export default function Hotspot({ 
  x, 
  y, 
  label, 
  object, 
  linepath, 
  line_position = { x: 0, y: 0, width: 0 }, 
  canvas_position = { x: 0, y: 0 } 
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // 2 second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="hotspot-wrapper hidden lg:block" 
      style={{
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {linepath && line_position && (
        <div 
          className="line-path"
          style={{
            position: 'absolute',
            left: `${line_position.x}px`,
            top: `${line_position.y}px`,
            width: `${line_position.width}px`,
            transform: 'translate(-50%, -50%)',
          }}
          dangerouslySetInnerHTML={{ __html: linepath }}
        />
      )}
      <div
        className={`hotspot-canvas flex flex-col justify-center items-center transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          position: "absolute",
          zIndex: 2,
          left: `${canvas_position.x}px`,
          top: `${canvas_position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-[100px] h-[100px] cursor-grab"> 
          <div className="absolute roundedborder rotate top-0 -translate-x-1/2 w-[100px] h-[100px] rounded-full"></div>   
          {isVisible && (
            <Canvas 
              camera={{ 
                position: [0, 0, 2.5],
                fov: 40
              }}
            >
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <group rotation={[0, 0, 0]} scale={.6}>
                <Model url={object} />
              </group>
              <OrbitControls 
                enableZoom={false} 
                enablePan={false} 
                enableRotate={true}
                autoRotate={true}
                autoRotateSpeed={2}
              />
            </Canvas>
          )}
        </div>
        <div className="hotspot-label text-center pt-3 w-[150px] text-sm">{label}</div>
      </div>
    </div>
  );
} 