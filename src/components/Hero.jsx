import { useGSAP } from '@gsap/react';
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';

import {ScrollTrigger} from 'gsap/all';
import VideoPreview from './VideoPreview';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

    const bgVideo = (index) => `videos/hero-${index}.mp4`;

    const [videoClicked , setvideoClicked] = useState(false); 
    const [currentVideoIndex, setcurrentVideoIndex] = useState(1);
    const [loadedVideoClip , setloadedVideoClip] = useState(0);
    const [isLoading , setisLoading] = useState(false);

    

    // const nextvideoclipIndex = (currentVideoIndex % 4)+1;  

    const nextVideo = useRef(null);
    
    // useEffect(() => {
    //     if(loadedVideoClip === 3){
    //         setisLoading(false);
    //         console.log(loadedVideoClip)
    //     }
    // }, [loadedVideoClip])
   
    const handleminivideoclip = () => {
        setvideoClicked(true);
        
        setcurrentVideoIndex((prev) => (prev % 3) + 1);
        
    }

    const handleLoadedVideoClip = () => {
        setloadedVideoClip((prev) => prev+1)
        // console.log(loadedVideoClip)
    }

    
    
    // video changing animation
    useGSAP(() => {
        if(videoClicked){
            
            gsap.set('#next-playable-video' , {visibility:'visible'});


            gsap.to('#next-playable-video' , {
                transformOrigin: 'center center',
                scale: 1,
                width: '100%',
                height: '100%',
                duration: 1,
                ease: 'power1.inOut',
                onStart : ()=> nextVideo.current.play(),
            })

            gsap.from('#current-playing-video' , {
                transformOrigin: 'center center',
                scale: 0,
                duration : 1.5,
                ease: 'power1.inOut'

            })

            // gsap.set('#next-playable-video-button' , {
            //     transformOrigin: 'center center',
            //     scale: 1,
            //     duration: 1,
            //     ease: 'power1.inOut',
            //     onStart : ()=> nextVideo.current.play(),
            // })
        }

    } , {dependencies : [currentVideoIndex] , revertOnUpdate : true})


    useGSAP(() => {
        gsap.set('#bg-video-frame' , {
            clipPath: 'polygon(10% 0%, 72% 0%, 90% 90%, 0% 100%)',
            borderRadius: '0 0 40% 10%',
        })

        gsap.from('#bg-video-frame' , {
            clipPath : 'polygon(0% 0% , 100% 0% , 100% 100% , 0% 100%)',
            borderRadius: '0 0 0 0',
            ease : 'power1.inOut',
            scrollTrigger : {
                trigger : '#bg-video-frame',
                start : 'center center',
                end : 'bottom center' ,
                scrub : true,
            }
        }) 

    })


    return (
        <div id = 'nexus' className='relative w-screen h-dvh overflow-x-hidden'>

            {/* {isLoading && (
                <div className='bg-violet-100 absolute flex-center z-[100] h-dvh w-screen overflow-hidden'>
                    <div className='three-body'>
                        <div className='three-body__dot'></div>
                        <div className='three-body__dot'></div>
                        <div className='three-body__dot'></div>
                    </div>
                </div>
            )} */}

            {/* video */}
            <div id = 'bg-video-frame' className='relative h-dvh w-screen overflow-hidden bg-blue-75 rounded-lg z-10'>

                <div>

                    <div className='mask-clip-path absolute-center size-64 z-50 overflow-hidden rounded-lg cursor-pointer'>
                        <VideoPreview>
                            <div onClick= {handleminivideoclip} className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-90 hover:opacity-100' >

                                <video 
                                    ref={nextVideo}
                                    src={bgVideo((currentVideoIndex % 4)+1)}
                                    loop
                                    muted
                                    autoPlay
                                    id = 'current-playing-video'

                                    className='object-center object-cover size-64 origin-center scale-150'
                                    
                                    onLoadedData={handleLoadedVideoClip}

                                />
                            </div>
                        </VideoPreview>
                        
                    </div>

                    
                    <video 
                        ref = {nextVideo}
                        src={bgVideo(currentVideoIndex)}
                        loop
                        muted
                        id = 'next-playable-video'
                        className='size-64 absolute-center invisible absolute z-20 object-cover object-center'
                        onLoad = {handleLoadedVideoClip}
                    />


                    {/* background video */}
                    <video 

                        src = {bgVideo(currentVideoIndex === 3 ? 1 : currentVideoIndex)}
                        autoPlay
                        muted
                        loop
                        className='absolute left-0 top-0 size-full object-cover object-center'
                        
                        onLoad = {handleLoadedVideoClip}

                    />
                </div>

                <h1 className='hero-heading special-font absolute z-40 bottom-5 right-5 text-blue-50' >G<b>a</b>ming</h1>

                <div className='absolute z-40 size-full top-0 left-0'>
                    <div className='px-5 mt-24 sm:px-10'>
                        
                        <h1 className='special-font hero-heading text-blue-75'>redefi<b>n</b>e</h1>

                        <p className='font-robert-regular text-blue-100 max-w-64 mb-5'>MetaGame : Metaverse of Gaming <br/> Unleash the Gaming beast in you</p>

                        <Button title="Watch Clips" leftIcon={<TiLocationArrow/>} classes='!bg-violet-300 flex-center gap-1'  />
                    
                    </div>
                </div>

                
            </div>
                <h1 className='hero-heading special-font absolute  bottom-5 right-5 text-black' >G<b>a</b>ming</h1>


        </div>
    )
}

export default Hero