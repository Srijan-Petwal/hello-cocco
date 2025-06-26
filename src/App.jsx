import { Canvas, useFrame } from "@react-three/fiber"
import {AdaptiveDpr, useBounds,Sparkles, Center, Environment, Sky, MeshReflectorMaterial, Float,Text3D,Text,Html, PerspectiveCamera,OrbitControls,useHelper, meshBounds } from "@react-three/drei"
import { useLoader, useThree } from '@react-three/fiber'
import { DirectionalLightHelper, SpotLightHelper, TextureLoader } from 'three'
import {Suspense,useRef, useState} from 'react'
import { button, useControls } from "leva"
import * as Three from 'three'


import BabaYagaHut from "./Baba_yagas_hut.jsx"
import Fairy from "./Fairy.jsx"
import Experience from "./Experience.jsx"
import WhiteFairy from "./WhiteFairy.jsx"

function RotatingBox(){
  const boxref=useRef()
  const [value,setValue]=useState(false)
  use
  useFrame((state,delta)=>{
    //   boxref.current.position.x+=state.pointer.x
    //   boxref.current.position.y=state.pointer.y
    //  boxref.current.rotation.x+=delta
    //   boxref.current.position.z=Math.sin(state.clock.elapsedTime)*5
      const rotate=value? 2:0;
      boxref.current.rotation.y+=delta*value;
    }
    )
    return(
      <mesh rotation={[2,2,0.54]} position={[-2,2,-1]} ref={boxref} 
      onPointerEnter={(event)=>{event.stopPropagation(),setValue(true)}} 
      onPointerLeave={()=>setValue(false)}

      >
        <boxGeometry    args={[5,5,2]}/>
        <meshPhysicalMaterial  color={value?"cyan":"white"} />
        
      </mesh>
    )
}


function Scene(){
  const texture = useLoader(TextureLoader, `/assets/disturb.jpg`)

  const directionalRef=useRef()
   const directionalRef2=useRef()
  useHelper(directionalRef,DirectionalLightHelper,1,"white")
 useHelper(directionalRef2,DirectionalLightHelper,1,"white")
 const {LightColor,LightIntensity}=useControls({
  LightColor:"pink"
 ,
 
  LightIntensity:{
    value:0.5,
    min:0,
    max:20
  }
}
)
  return(
      <>
      <OrbitControls reverseOrbit/>
      <ambientLight intensity={1.5} />
      <spotLight 
          
            color={"#edc80c"}
            position={[5,0,10]} 
            angle={0.4} 
            penumbra={0.5} 
            intensity={100} 
            decay={2}
            focus={1}
            castShadow
            map={texture }
      />
         <spotLight 
            
            color={"#df75f0"}
            position={[5,0,15]} 
            angle={0.2} 
            penumbra={1} 
            intensity={100} 
            decay={1}
            focus={1}
            castShadow
            map={texture }
      />

      <directionalLight ref={directionalRef} scale={[4,4,4]} intensity={LightIntensity} color={LightColor}  position={[4,5,-5]} />
      <directionalLight ref={directionalRef2} intensity={10} color="purple"  position={[-4,5,2]} />
        <mesh  position={[1,0,0]}>
          <boxGeometry  args={[2,2,4]} />
          <meshStandardMaterial color={"#89f0a4"} />
        </mesh>
        <RotatingBox/>
      </>
  )
}

//Camera move


//import { Perf, usePerf } from "r3f-perf"

function App() {

    const texture = useLoader(TextureLoader, `/assets/disturb.jpg`)
   
    const {color,position,visible,}=useControls({
      color:"#6f7079",   //#7a7eb1
      position:{
        value:{x:4.1,y:1.44},
        step:0.01,
        joystick:'invertY'
      },
      visible:true,
      Alert:button(()=>{window.alert("Hello Cocco!")})
    })
    //console.log(color)
    const moonRef=useRef()
  
      const {sunPosition}=useControls('SunControls',{
        sunPosition: {value:[1,2,3]}
      })
      // const {showPerf}=useControls('show overall Stats',{
      //   showPerf:true,
      // })
  //console.log(Three.ACESFilmicToneMapping)

   const {sparkleColor,ShowBackground}=useControls('Sparkle and Background Controls',{
    sparkleColor:"yellow",
    ShowBackground:false
   })

   const [scale,setScale]=useState(0.3)
   
  return (
    
    <>
     {/* <h1 className=" select-none font-sans text-sh z-[1] text-[#fbbfee] absolute text-center left-[10vw] text-[15rem]   font-bold "> Hello World</h1> */}
     <div  className="  z-[-10] flex align-middle justify-center items-center   w-[100vw] h-[100vh]">
    
     

     <Canvas 
     className=" bg-[#040348] "
      gl={{ physicallyCorrectLights: true, antialias:false, toneMapping:4,   outputColorSpace: Three.SRGBColorSpace }}
      dpr={[1, 2]} 
      camera={{zoom:1.3}}
     >
      {/* {showPerf && <Perf position="bottom-left" />} */}
      {/* <Sky sunPosition={sunPosition} /> */}
     <Center position={[0.5,0,0]}>
            <Sparkles 
                      size={5}
                      scale={[8,4,8]}
                      speed={0.6}
                      
                      color={sparkleColor}
                     count={100}
                     
                          />
      </Center>
     <Float speed={1}>



    

 { ShowBackground && <Environment
    files={'/assets/sceneHDRI.hdr'}
    background 
    
  /> }

 
      {/* <PerspectiveCamera  makeDefault position={[-3,7,15]} fov={75} near={0.1} far={200} /> */}
           <spotLight 
            
            color={"mediumpurple"}
            position={[-5,-1,50]} 
            angle={0.2} 
            penumbra={1} 
            intensity={200} 
            decay={1}
            focus={1}
            castShadow
           // map={texture }
      />
       <spotLight 

            color={"blue"}
            position={[-20,20,50]} 
            angle={0.4} 
            penumbra={1} 
            intensity={100} 
            decay={1}
            focus={1}
            castShadow
            map={texture }
      />
      <OrbitControls makeDefault  />
       <directionalLight  scale={[4,4,4]} intensity={2} color="#f5f1c4"  position={[0,5,15]} />
      {/*  <Scene/>  */}

        <ambientLight intensity={1.8} color="#a06dc2" />
         {/* <HomeComponent  />  */}

        <mesh onClick={(e)=>{setScale(0.33);
                               moonRef.current.material.color.set(`hsl(${Math.random()*360}, 100%, 75%)`);
                            setTimeout(()=>setScale(0.3),25);
                           
        }}  ref={moonRef} raycast={meshBounds}  receiveShadow scale={scale} position={[position.x,position.y,-2]} visible={visible}
        
            onPointerOver={()=>{document.body.style.cursor='pointer'}}
            onPointerOut={()=>{document.body.style.cursor='default'}}
        >
            <sphereGeometry />
            <meshBasicMaterial toneMapped={false}   color={[1.5,1,0]}/>
            {/* <MeshReflectorMaterial resolution={512} ></MeshReflectorMaterial> */}
        </mesh>
        
       <AdaptiveDpr pixelated />

       
        <BabaYagaHut    rotation-y={Math.PI*1.27}  scale={0.10} position={[0,-1.2,0]} />
       
        <Html castShadow position={[1-0.22,-1,-1.05+0.15]}  center wrapperClass="fairy-label" distanceFactor={5} occlude={[moonRef]} >Fairy </Html>
       
{/*        
       <Text   scale-y={1.3}  fontSize={1} position={[1,2,-2]} textAlign="center" >Hello Cocco!
        <meshNormalMaterial side={Three.DoubleSide} />
      </Text> */}

        <mesh scale-x={7} scale-y={1.3}  position={[1,2,-3]} >
            <planeGeometry   />
            <MeshReflectorMaterial resolution={512} color={color} mirror={0.7} />
        </mesh> 

        <Experience />

      </Float>
       <Fairy position={[1-0.22,-1,-1.05+0.15]} scale={0.2} />
     </Canvas>
     </div>
   
    </>
  )
}

export default App
