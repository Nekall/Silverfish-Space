"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";

// Components
import RotatingCamera from "@/components/rotatingCamera";
import Skybox from "@/components/skybox";

const Background = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        gl={{
          antialias: true,
          powerPreference: "high-performance",
        }}
        camera={{ fov: 70, near: 45, far: 30000, position: [0, 0, 0] }}
        onCreated={({ gl }) => {
          const canvas = gl.domElement;

          const handleLost = (e: Event) => {
            const webglEvent = e as WebGLContextEvent;
            webglEvent.preventDefault();
            console.warn("WebGL context lost", e);
          };

          const handleRestore = (e: Event) => {
            console.info("WebGL context restored", e);
          };

          canvas.addEventListener("webglcontextlost", handleLost, false);
          canvas.addEventListener("webglcontextrestored", handleRestore, false);

          return () => {
            canvas.removeEventListener("webglcontextlost", handleLost);
            canvas.removeEventListener("webglcontextrestored", handleRestore);
          };
        }}
      >
        <Suspense fallback={null}>
          <RotatingCamera />
          <Skybox />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Background;
