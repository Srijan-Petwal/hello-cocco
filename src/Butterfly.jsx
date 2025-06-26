import { Clone, useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useMemo, useRef } from 'react'


const MyModel = () => {
  const model = useGLTF('/assets/ulysses_butterfly.glb')
    const modelRef=useRef([])

  
  useFrame((state,delta)=>{
    for(const butterfly of modelRef.current){
        
         //butterfly.rotation.y+=Math.cos(delta)*0.2
          butterfly.position.y+=Math.sin(delta)*0.3
          butterfly.position.z+=Math.cos(delta)*-(Math.random())*0.035
          butterfly.rotation.x+=Math.random()*Math.cos(delta)
          butterfly.rotation.z+=Math.random()*Math.sin(delta)
    }
  })

  // Use useMemo to avoid re-creating meshes on every render
  const butterflies = useMemo(() => {
    return new Array(100).fill().map((_, i) => (
      <Clone ref={(element)=>modelRef.current[i]=element} object={model.scene}
        key={i}
        
        position={[
          (Math.random() -0.4) * 10,
          (Math.random() - 0.5) * 5,
          (Math.random() - 0.5) * 5
        ]}
        rotation={[
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random()*Math.PI
        ]}
        scale={Math.random() * 0.08}
      />
    ))
  }, [])

  return <>{butterflies}</>
}
useGLTF.preload('/assets/ulysses_butterfly.glb')
export default MyModel;