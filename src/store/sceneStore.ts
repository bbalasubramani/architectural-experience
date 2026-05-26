import { create } from 'zustand'

interface SceneStore {
  // Scene state
  currentScene: number
  isLoading: boolean
  isScrolling: boolean

  // Camera controls
  cameraPosition: [number, number, number]
  cameraTarget: [number, number, number]
  
  // Mouse state
  mouseX: number
  mouseY: number
  
  // Actions
  setCurrentScene: (scene: number) => void
  setIsLoading: (loading: boolean) => void
  setIsScrolling: (scrolling: boolean) => void
  setCameraPosition: (pos: [number, number, number]) => void
  setCameraTarget: (target: [number, number, number]) => void
  setMousePosition: (x: number, y: number) => void
  reset: () => void
}

const initialState = {
  currentScene: 0,
  isLoading: true,
  isScrolling: false,
  cameraPosition: [0, 0, 15] as [number, number, number],
  cameraTarget: [0, 0, 0] as [number, number, number],
  mouseX: 0,
  mouseY: 0,
}

export const useSceneStore = create<SceneStore>((set) => ({
  ...initialState,
  
  setCurrentScene: (scene: number) => set({ currentScene: scene }),
  setIsLoading: (loading: boolean) => set({ isLoading: loading }),
  setIsScrolling: (scrolling: boolean) => set({ isScrolling: scrolling }),
  setCameraPosition: (pos: [number, number, number]) => set({ cameraPosition: pos }),
  setCameraTarget: (target: [number, number, number]) => set({ cameraTarget: target }),
  setMousePosition: (x: number, y: number) => set({ mouseX: x, mouseY: y }),
  reset: () => set(initialState),
}))
