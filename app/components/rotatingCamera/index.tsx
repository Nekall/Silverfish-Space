import { useFrame, useThree } from "@react-three/fiber";

const RotatingCamera = () => {
  const { camera } = useThree();

  useFrame(() => {
    camera.rotation.y -= 0.0006;
  });

  return null;
};

export default RotatingCamera;
