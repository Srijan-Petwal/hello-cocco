import { useAnimations, useFBX } from "@react-three/drei"
import { useEffect } from "react"


export default function Madara(props){

    const model=useFBX('./assets/Yelling_While_Standing.fbx')
    //console.log(model)
  

    
    const animations=useAnimations(model.animations,model)
   
    
    //console.log(animations)
    useEffect(()=>{
        
       const names=animations.names
        const action1=animations.actions[names[0]]
        
        action1.play()
        
    },[])

    return <primitive  object={model} {...props} >{props.children}</primitive>
}
useFBX.preload('/assets/Madara.fbx')