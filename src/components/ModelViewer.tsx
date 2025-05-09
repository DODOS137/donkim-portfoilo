
import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF, Text } from '@react-three/drei';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Mesh } from 'three';

interface ModelProps {
  modelPath: string;
}

function Model({ modelPath }: ModelProps) {
  const [error, setError] = useState<Error | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Use a separate component for the actual model to handle errors properly
  const ModelContent = () => {
    try {
      // Force clear the cache for this model to ensure we load the latest version
      useGLTF.preload(modelPath);
      const { scene } = useGLTF(modelPath);
      
      // Mark as loaded when successful
      useEffect(() => {
        setIsLoaded(true);
        console.log("Model loaded successfully:", modelPath);
      }, []);
      
      return <primitive object={scene} scale={1.5} position={[0, -1, 0]} />;
    } catch (err) {
      console.error("Error in ModelContent:", err);
      setError(err instanceof Error ? err : new Error('Unknown error loading model'));
      return null;
    }
  };

  // Fallback cube when model fails to load
  const FallbackCube = () => {
    return (
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    );
  };

  return (
    <>
      {error ? (
        <>
          <FallbackCube />
          {/* Replace textGeometry with Text component from drei */}
          <Text
            position={[0, -2, 0]}
            fontSize={0.2}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            Error loading model
          </Text>
        </>
      ) : (
        <ModelContent />
      )}
    </>
  );
}

interface ModelViewerProps {
  modelPath: string;
  title?: string;
}

const ModelViewer = ({ modelPath, title }: ModelViewerProps) => {
  console.log("ModelViewer rendering with path:", modelPath);
  
  return (
    <div className="w-full my-10">
      {title && <h3 className="text-white text-xl mb-4">{title}</h3>}
      <div className="bg-gray-900 rounded-lg overflow-hidden">
        <AspectRatio ratio={16 / 9}>
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Suspense fallback={
              <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[0.5, 16, 16]} />
                <meshStandardMaterial color="blue" wireframe />
              </mesh>
            }>
              <Model modelPath={modelPath} />
              <Environment preset="city" />
            </Suspense>
            <OrbitControls 
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
            />
          </Canvas>
        </AspectRatio>
      </div>
      <p className="text-gray-400 text-sm mt-2">Click and drag to rotate. Scroll to zoom.</p>
    </div>
  );
};

export default ModelViewer;
