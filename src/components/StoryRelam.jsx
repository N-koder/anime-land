import React, { useRef } from 'react'
import TitleAnimation from './TitleAnimation'
import gsap from 'gsap';
import RoundedCorners from './RoundedCorner';
import Button from './Button';

const StoryRelam = () => {

    const storyref = useRef(null);

    const handleMouseLeave = () => {
        const element = storyref.current; 

        gsap.to(element , {
            duration : 0.3,
            rotateX : 0,
            rotateY : 0,
            transformPerspective : 500,
            ease : 'power1.inOut'
        })
    }

    const handleMouseMove = (e) => {
        const {clientX , clientY} = e;
        const element = storyref.current;

        if(!element) return;

        const rect = element.getBoundingClientRect();

        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const centerX =  rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;


        gsap.to(element , {
            duration : 0.3,
            rotateX : rotateX,
            rotateY : rotateY,
            transformPerspective : 500,
            ease : 'power1.inOut'
        })
    }

  return (
    <section id="story" className='min-h-dvh bg-black w-screen text-white'>

        <div className='flex size-full flex-col items-center py-10 pb-24'>

            <p className='font-general uppercase text-sm md:text-[10px]'>The Multiversal Realm of IP</p>

            <div className='relative size-full'>
                
                <TitleAnimation 
                    title="The Tale of <br/>  a Hidden Real<b>m</b>"
                    DefaultStyles="mt-5 mix-blend-difference relative z-10 pointer-events-none"
                
                />

                <div className="story-img-container">
                    <div className="story-img-mask">
                        <div className="story-img-content">
                            <img 
                                ref = {storyref}
                                src = "/img/entrance.webp" className='object-contain'

                                onMouseEnter={handleMouseLeave}
                                onMouseLeave={handleMouseLeave}
                                onMouseMove={handleMouseMove}
                                onMouseUp={handleMouseLeave}
                            />
                        </div>
                    </div>

                    <RoundedCorners/>

                </div>

            </div>

            <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">

                <div className='w-fit h-full flex flex-col items-center md:items-start'>

                    <p className='max-w-sm text-center mt-3 font-circular-web text-white md:text-start'>Where Realms Unite: Unveiling Zentry and the Boundless Pillar. Explore its mysteries and forge your destiny amid endless possibilities</p>

                    <Button id="realm-btn" title="Unveil the Prologue" classes='mt-5'/>
                    
                </div>


            </div>

        </div>

    </section>
  )
}

export default StoryRelam