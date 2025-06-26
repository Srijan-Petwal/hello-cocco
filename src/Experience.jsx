

// import Dragon from "./Dragon.jsx"
// import { Suspense } from "react"

// export default function Experience(){
//     return  <> 
//      <Suspense fallback={<mesh position={[0.6,0.9,2]} scale={40} ><sphereGeometry /><meshStandardMaterial /></mesh>}
//                     >
//                      <Dragon scale={0.0025} position={[0.6,0.9,-2.1]} />
//     </Suspense>
//     </>
// }
import Madara from "./Madara.jsx"
import Dragon from "./Dragon.jsx"
import {useEffect, Suspense, useRef } from "react"
import  Dragon2  from "./dragon2.jsx"
import WhiteFairy from "./WhiteFairy.jsx"
import { useFrame } from "@react-three/fiber"
import {Sparkles,Center, Text3D, Float, PositionalAudio, useMatcapTexture } from "@react-three/drei"
import { useControls } from "leva"
import MyModel from "./Butterfly.jsx"
import { EffectComposer, Bloom, DepthOfField } from "@react-three/postprocessing"

export default function Experience(){

    const fairyRef=useRef()
    useFrame((state,delta)=>{
            const speed=state.clock.elapsedTime;
           fairyRef.current.position.x+=Math.sin(speed)*0.004
           fairyRef.current.position.z+=Math.cos(speed)*0.003
           //fairyRef.current.rotation.y+=Math.PI*0.008
    })

    const {showMadara,bgMadara1, madaraVoice } = useControls('Madara 🔊', {
      showMadara:false,
      bgMadara1:false,
      madaraVoice: {
      label: 'Voice Line',
      options: {
        'None': 'none',
        'Line 1': 'sayMadara1',
        'Line 2': 'sayMadara2',
        'Line 3': 'sayMadara3',
    },
    value: 'none'
  }
})

    const [matcapTexture]=useMatcapTexture('3F3A2F_91D0A5_7D876A_94977B',512)
   // console.log(matcapTexture)
    return  <> 
                   
                    
                    <Dragon scale={0.0025} position={[0.6,0.9,-2]} />
                    <Dragon2 scale={0.0015} position={[1.3,0.45,-1.9]} rotation-z={Math.PI*-1.4} rotation-x={Math.PI*-2}   /> 
                    <Float >
                         
                                 
                        <WhiteFairy ref={fairyRef} position={[1.5,2.5,-1.4]}  scale={0.20}  rotation-y={Math.PI*1.4} />
                        
                    </Float>
                    
                    {showMadara && < Madara  scale={0.005} position={[3.64,2.05,-2.05]} rotation-y={Math.PI*-0.30} >
                                        {bgMadara1  && <PositionalAudio url="/assets/sound_effect.mp3" distance={0.5} autoplay  />}
                                       { (madaraVoice==='sayMadara1') && <PositionalAudio url="/assets/MadaraAudio/1.mp3" distance={2} autoplay loop={false} />}
                                       { (madaraVoice==='sayMadara2') && <PositionalAudio url="/assets/MadaraAudio/2.mp3" distance={2} autoplay loop={false} />}
                                         { (madaraVoice==='sayMadara3') && <PositionalAudio url="/assets/MadaraAudio/3.mp3" distance={2} autoplay loop={false} />}
                     
                                     </Madara>}
                    <Center position={[1,2,-2]} scale={0.9}>
                    <Text3D   font="/assets/fonts/Underdog_Regular.json"  height={0.3} >
                        Hello Cocco!
                        <meshNormalMaterial />
                    </Text3D>
                    </Center>
                       
                      <Center position={[1,7,-6]} scale={2}  >
                        <Text3D
                        font={'./assets/fonts/Underdog_Regular.json'}
                        curveSegments={10}
                        bevelEnabled={true}
                        bevelSegments={8}
                        
                        >
                             Cocco's WoRlD
                            <meshMatcapMaterial  matcap={matcapTexture} />
                        </Text3D>  
                      </Center>  
                    
                    <Float speed={1} rotationIntensity={1} floatingRange={[-0.1,0.5]} floatIntensity={2} ><MyModel/></Float>
{/* 
                    <EffectComposer>
                        <Bloom 
                        mipmapBlur
                        intensity={1}
                        luminanceThreshold={1}
                        luminanceSmoothing={0.8} 
                        /> */}

                        {/* <DepthOfField focalLength={0.03} focusDistance={0.03} bokehScale={0.5}/> */}
                    {/* </EffectComposer> */}
                    
    </>
}
