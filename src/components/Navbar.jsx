import React, { useRef, useState, useEffect } from 'react'
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';
import { FaAudioDescription, FaVoicemail } from 'react-icons/fa6';


const NavItems = ['Nexus' , 'Vault' , 'Prologue' , 'About' , 'Contact'];



const Navbar = () => {
  const navbaref = useRef(null);

  const [PlayAudio , setPlayAudio] = useState(false);

  // indicator
  const [AudioToggle , setAudioToggle] = useState(false);

  const audioRef = useRef(null);

  const toggleAudio = () => {
    setPlayAudio((prev) => !prev);
    setAudioToggle((prev) => !prev);
  }

  const[NavVisible , setNavVisible] = useState(true);
  const[LastScroll , setLastScroll] = useState(0);

  const {y : currentScroll}  = useWindowScroll();

  useEffect(()=> {
    if(currentScroll === 0){
      setNavVisible(true);
      navbaref.current.classList.remove('floating-nav')

    } else if(currentScroll > LastScroll){
      setNavVisible(false);
      navbaref.current.classList.add('floating-nav');
    
    } else if(currentScroll < LastScroll){
      setNavVisible(true);
      navbaref.current.classList.add('floating-nav');
    } 

    setLastScroll(currentScroll);

  } , [currentScroll])

  // visibility of navbar 
  useEffect(()=> {

    gsap.to(navbaref.current , {
      y : NavVisible ? 0 : -100,
      opacity : NavVisible ? 1 : 0,
      duration : 0.2,
    })


  }, [NavVisible])


  useEffect(() => {

    if(PlayAudio){
      audioRef.current.play();
    }else{
      audioRef.current.pause();
    }

  } , [PlayAudio])


  return (
    <div ref = {navbaref} className='fixed top-4 z-50 h-16 inset-x-0 border-none  transition-all duration-500 sm:inset-x-6'>
      
      <header className='absolute w-full top-1/2 -translate-y-1/2'>  

        <nav className='flex size-full items-center justify-between p-4'>

          <div className='flex items-center gap-7'>

            <img src='/img/logo.png' className='w-10' />
            
            <Button 
              id = "p-button"
              title= "Products"
              rightIcon={<TiLocationArrow/>}
              classes='bg-red-500 md:flex hidden items-center justify-center gap-1'

            />
          </div>

          <div className = 'h-full flex items-center'>
            
            <div className='hidden md:block'>
              {NavItems.map((items , index) => (
                <a key = {index} className='nav-hover-btn' href = {`#${items.toLowerCase()}`}>{items}</a>
              ))}
            </div>

            <button className='ml-10 space-x-0.5 flex items-center' onClick={toggleAudio}>
              <audio ref = {audioRef}  src='/audio/loop.mp3' className='hidden' loop/>
                
                <div className='text-white'><FaVoicemail/></div>
                {[1,2,3,4].map((bar)=> (

                  <div key = {bar} className={`indicator-line ${AudioToggle ? 'active' : ''}`}  style={{animationDelay : `${bar*0.1}s`}}/>

                ))}

            </button>
            
            

          </div>

        </nav>

      </header>
      
    </div>
  )
}

export default Navbar