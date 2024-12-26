import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import _ScrollTrigger from 'gsap/ScrollTrigger'
import React from 'react'
import TitleAnimation from './TitleAnimation';


gsap.registerPlugin(_ScrollTrigger);

const About = () => {
  
  useGSAP(() => {
    const aboutclipanimation = gsap.timeline({
      scrollTrigger:{
        trigger : '#about-clip',
        start : 'center center',
        end : '=+800 center',
        scrub: '0.5',
        pin: true,
        pinSpacing : true,
      }
    })

    aboutclipanimation.to('.mask-clip-path' , {
      width: '100vw',
      height: '100vh',
      borderRadius: 0,
    })

  })
  
  return (
    <div id = "about" className='min-h-screen w-screen'>

        <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
            <h2 className='font-general text-sm uppercase md:text-[10px]'>
                Welcome to Zentry
            </h2>

            <TitleAnimation title="Disc<b>o</b>ver the world's <br/> l<b>a</b>rgest shared adventure" DefaultStyles='!text-black mt-5 text-center'/>

            {/* <div className='about-subtext'>
              <p>The Game of Games begins-your life, now an epic MMORPG</p>
              <p>Zentry unites every player from countless games and platforms</p>
            </div> */}
        </div>

        <div className="h-dvh w-screen" id = "about-clip">
          
          <div className='mask-clip-path about-image'>
            
            <img 
              src = "img/about.webp"
              className='absolute size-full top-0 left-0 object-cover'
            />

          </div>
      
        </div>


    </div>
  )
}

export default About