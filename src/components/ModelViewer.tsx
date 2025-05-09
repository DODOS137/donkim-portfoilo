
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ModelProps {
  modelPath: string;
}

function Model({ modelPath }: ModelProps) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={1.5} position={[0, -1, 0]} />;
}

interface ModelViewerProps {
  modelPath: string;
  title?: string;
}

const ModelViewer = ({ modelPath, title }: ModelViewerProps) => {
  return (
    <div className="w-full my-10">
      {title && <h3 className="text-white text-xl mb-4">{title}</h3>}
      <div className="bg-gray-900 rounded-lg overflow-hidden">
        <AspectRatio ratio={16 / 9}>
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Suspense fallback={null}>
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
