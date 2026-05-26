'use client'

import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useSceneStore } from '@/store/sceneStore'
import gsap from 'gsap'
import * as THREE from 'three'

export default function Scene() {
  const groupRef = useRef<THREE.Group>(null)
  const { camera } = useThree()
  const { mouseX, mouseY, currentScene } = useSceneStore()

  // Create architectural geometries
  useEffect(() => {
    if (!groupRef.current) return

    // Main geometric elements
    const geometries = [
      // Central cube (representing main structure)
      {
        geometry: new THREE.BoxGeometry(4, 6, 4),
        position: [0, 0, 0],
        material: new THREE.MeshStandardMaterial({
          color: '#d4c5b9',
          metalness: 0.1,
          roughness: 0.8,
        }),
      },
      // Left pillar
      {
        geometry: new THREE.CylinderGeometry(0.5, 0.8, 8, 32),
        position: [-5, 0, -3],
        material: new THREE.MeshStandardMaterial({
          color: '#a89884',
          metalness: 0.05,
          roughness: 0.9,
        }),
      },
      // Right pillar
      {
        geometry: new THREE.CylinderGeometry(0.5, 0.8, 8, 32),
        position: [5, 0, -3],
        material: new THREE.MeshStandardMaterial({
          color: '#a89884',
          metalness: 0.05,
          roughness: 0.9,
        }),
      },
      // Floating planes (depth composition)
      {
        geometry: new THREE.PlaneGeometry(3, 8),
        position: [-6, 0, 2],
        material: new THREE.MeshStandardMaterial({
          color: '#2a2a2a',
          metalness: 0.2,
          roughness: 0.7,
          side: THREE.DoubleSide,
        }),
      },
      {
        geometry: new THREE.PlaneGeometry(3, 8),
        position: [6, 0, 2],
        material: new THREE.MeshStandardMaterial({
          color: '#2a2a2a',
          metalness: 0.2,
          roughness: 0.7,
          side: THREE.DoubleSide,
        }),
      },
    ]

    geometries.forEach(({ geometry, position, material }) => {
      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.set(...(position as [number, number, number]))
      mesh.castShadow = true
      mesh.receiveShadow = true
      groupRef.current?.add(mesh)
    })

    return () => {
      geometries.forEach(({ geometry, material }) => {
        geometry.dispose()
        material.dispose()
      })
    }
  }, [])

  // Cinematic camera animation based on scene
  useEffect(() => {
    const scenes = [
      { pos: [0, 0, 15], target: [0, 0, 0] },      // Hero
      { pos: [10, 5, 10], target: [0, 0, 0] },     // Architecture
      { pos: [-10, 0, 8], target: [-5, 0, -3] },   // Details Left
      { pos: [10, 0, 8], target: [5, 0, -3] },     // Details Right
    ]

    const scene = scenes[currentScene] || scenes[0]
    
    gsap.to(camera.position, {
      x: scene.pos[0],
      y: scene.pos[1],
      z: scene.pos[2],
      duration: 2,
      ease: 'power2.inOut',
    })
  }, [currentScene, camera])

  // Rotation and parallax animation
  useFrame(() => {
    if (groupRef.current) {
      // Slow cinematic drift
      groupRef.current.rotation.y += 0.0003

      // Mouse parallax
      gsap.to(groupRef.current.rotation, {
        x: mouseY * 0.5,
        y: mouseX * 0.5,
        duration: 1.5,
        ease: 'power2.out',
      })

      // Gentle floating animation
      groupRef.current.position.y = Math.sin(Date.now() * 0.0005) * 0.5
    }
  })

  return (
    <group ref={groupRef}>
      {/* Scene content is added in the effect above */}
    </group>
  )
}
