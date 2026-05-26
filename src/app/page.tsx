'use client'

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Lenis } from 'react-lenis'
import { EffectComposer, Bloom, DepthOfField, Vignette } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import Scene from '@/scenes/Scene'
import HeroSection from '@/components/sections/HeroSection'
import ArchitectureSection from '@/components/sections/ArchitectureSection'
import DetailsSection from '@/components/sections/DetailsSection'
import FooterSection from '@/components/sections/FooterSection'
import LoadingScreen from '@/components/ui/LoadingScreen'

export default function Home() {
  return (
    <Lenis root>
      <div className="relative w-full h-screen bg-charcoal">
        {/* WebGL Canvas */}
        <div className="fixed top-0 left-0 w-full h-screen z-0">
          <Suspense fallback={<LoadingScreen />}>
            <Canvas
              camera={{
                position: [0, 0, 15],
                fov: 75,
                near: 0.1,
                far: 1000,
              }}
              dpr={[1, 2]}
              performance={{ min: 0.5 }}
            >
              <color attach="background" args={['#1a1a1a']} />
              
              {/* Lighting */}
              <ambientLight intensity={0.4} />
              <directionalLight
                position={[5, 10, 7]}
                intensity={0.8}
                castShadow
              />
              <pointLight position={[-5, -10, -5]} intensity={0.3} />
              
              {/* Main Scene */}
              <Scene />
              
              {/* Post Processing */}
              <EffectComposer>
                <Bloom
                  luminanceThreshold={0.3}
                  luminanceSmoothing={0.9}
                  intensity={1.2}
                  blendFunction={BlendFunction.ADD}
                />
                <DepthOfField
                  focusDistance={0}
                  focalLength={0.02}
                  bokehScale={2}
                  height={480}
                />
                <Vignette
                  eskil={false}
                  offset={0.1}
                  darkness={0.4}
                  blendFunction={BlendFunction.NORMAL}
                />
              </EffectComposer>
            </Canvas>
          </Suspense>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10">
          <HeroSection />
          <ArchitectureSection />
          <DetailsSection />
          <FooterSection />
        </div>
      </div>
    </Lenis>
  )
}
