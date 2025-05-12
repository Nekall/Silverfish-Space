import { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import {
  TextureLoader,
  Mesh,
  BoxGeometry,
  MeshBasicMaterial,
  BackSide,
} from "three";

const createPathStrings = () => {
  return [
    "/panorama/1.17_panorama_0.png", // px right
    "/panorama/1.17_panorama_2.png", // nx left
    "/panorama/1.17_panorama_4.png", // py top
    "/panorama/1.17_panorama_5.png", // ny bottom
    "/panorama/1.17_panorama_3.png", // pz front
    "/panorama/1.17_panorama_1.png", // nz back
  ];
};

const Skybox = () => {
  const texturePaths = createPathStrings();

  const textures = useLoader(TextureLoader, texturePaths);

  const materialArray = textures.map(
    (texture) => new MeshBasicMaterial({ map: texture, side: BackSide })
  );

  const skyboxGeo = new BoxGeometry(10000, 10000, 10000);
  const skyboxRef = useRef<Mesh>(null);

  return <mesh ref={skyboxRef} geometry={skyboxGeo} material={materialArray} />;
};

export default Skybox;
