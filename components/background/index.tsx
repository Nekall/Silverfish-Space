"use client";

import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";

// Components
import RotatingCamera from "@/components/rotatingCamera";
import Skybox from "@/components/skybox";

const Background = () => {
  useEffect(() => {
    console.log("Canvas mounted");
  }, []);
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        key={"skybox-mc-bg-launcher"}
        gl={{
          antialias: true,
          preserveDrawingBuffer: true,
          powerPreference: "high-performance",
        }}
        camera={{
          fov: 70,
          near: 45,
          far: 30000,
          position: [0, 0, 0],
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
