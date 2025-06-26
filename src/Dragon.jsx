
// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/Addons.js";

// export default function Dragon(props){
//     const model=useLoader(GLTFLoader,'./assets/shenron_dragon_ball.glb');
//     return <primitive object={model.scene} {...props}  />
// }


//Method with Suspending manually
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useState, useEffect, useRef } from "react";

// export default function Dragon(props) {
//   const [model, setModel] = useState(null);

//   useEffect(() => {
//     const loader = new GLTFLoader();
//     loader.load(
//       "./assets/shenron_dragon_ball.glb",
//       (gltf) => setModel(gltf),
//       undefined,
//       (error) => console.error("Error loading model:", error)
//     );
//   }, []);

//   if (!model) {
//     // Show fallback mesh at same position
//     return (
//       <mesh position={[0.6,1,-2.1]} scale={0.5} >
//         <planeGeometry/>
//         <meshStandardMaterial wireframe color="orange" />
//       </mesh>
//     );
//   }

//   return <primitive object={model.scene} {...props} />;
// }

// import { useLoader } from '@react-three/fiber'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import { suspend } from 'suspend-react'

// export default function Dragon(props) {
//   const model = suspend(() => new GLTFLoader().loadAsync('/assets/shenron_dragon_ball.glb'), ['/assets/shenron_dragon_ball.glb'])

//   return <primitive object={model.scene} {...props} />
// }

import { Gltf, useGLTF } from "@react-three/drei";
 export default function Dragon(props) {
    const model=useGLTF('./assets/shenron_dragon_ball.glb')
    const modelRef=useRef()
    return <primitive ref={modelRef} on onClick={(e)=>
      
      {  e.stopPropagation()
         console.log(e)
         console.log(modelRef.current)
         

      }

      
   } 

   onPointerOver={()=>{document.body.style.cursor='pointer'}}
   onPointerOut={()=>{document.body.style.cursor='default'}}
      object={model.scene} {...props} />
 }
  
 useGLTF.preload('./assets/shenron_dragon_ball.glb')