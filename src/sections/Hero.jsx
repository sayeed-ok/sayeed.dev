import { section } from "motion/react-client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
// components
import { AstornautModel } from "../components/AstronautModel";
import Parallax from "../components/ParallaxBG";
import HeroText from "../components/HeroText";
import Loader from "../components/Loader";

export default function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  function Rig() {
    return useFrame((state, delta) => {
      easing.damp3(
        state.camera.position,
        [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
        0.5,
        delta
      );
    });
  }
  return (
    <section id="home" className="flex items-start justify-center min-h-screen overflow-hidden  md:justify-start c-space"
    >
      <HeroText />
      <Parallax />

      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float position={isMobile ? [0, 1, -.5] : [0, 0, 0]}>
              <AstornautModel
                scale={isMobile && 0.30}
                position={isMobile && [-0.2, 0, 0]}
                rotation={isMobile && [-Math.PI / 4.6, -Math.PI / 10, Math.PI / 2]}

              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>

    </section>
  )
}

// [-Math.PI / 4.6, -Math.PI / 10, Math.PI / 2]