'use client'

import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useSceneStore } from '@/store/sceneStore'
import gsap from 'gsap'

export const useMouseParallax = () => {
  const { setMousePosition } = useSceneStore()
  const groupRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = -(event.clientY / window.innerHeight) * 2 + 1
      setMousePosition(x * 0.5, y * 0.5)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [setMousePosition])

  useFrame(() => {
    if (groupRef.current) {
      const { mouseX, mouseY } = useSceneStore.getState()
      gsap.to(groupRef.current, {
        rotationY: mouseX * 0.3,
        rotationX: mouseY * 0.3,
        duration: 2,
        ease: 'power2.out',
      })
    }
  })

  return groupRef
}

export const useScrollAnimation = () => {
  const { currentScene, setCurrentScene } = useSceneStore()

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY / scrollHeight
      const scene = Math.floor(scrolled * 4)
      
      if (scene !== currentScene) {
        setCurrentScene(scene)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [currentScene, setCurrentScene])

  return currentScene
}

export const useCinematicCamera = (
  targetPos: [number, number, number],
  duration: number = 1
) => {
  const { setCameraPosition } = useSceneStore()

  useEffect(() => {
    gsap.to(useSceneStore.getState(), {
      cameraPosition: targetPos,
      duration,
      ease: 'power2.inOut',
      onUpdate: () => {
        const { cameraPosition } = useSceneStore.getState()
        setCameraPosition(cameraPosition)
      },
    })
  }, [targetPos, duration, setCameraPosition])
}

export const useWindowResize = (callback: (w: number, h: number) => void) => {
  useEffect(() => {
    const handleResize = () => {
      callback(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [callback])
}
