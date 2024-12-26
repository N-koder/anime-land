import React from 'react'
import Button from './Button'

const ImgClip = ({src , classforclip}) => (
    <div className= {classforclip}>
        <img src={src}/>
    </div>
)


const Contact = () => {
  return (
    <div id = "contact" className='w-screen min-h-96 my-20 px-10'>
        
        <div className="relative rounded-lg bg-black py-24 text-white sm:overflow-hidden">

            <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">

                <ImgClip src = "img/contact-1.webp" classforclip="contact-clip-path-1"/>
                
                <ImgClip src = "img/contact-2.webp" classforclip="contact-clip-path-2 lg:translate-y-40 translate-y-60" />
            </div>
            
            <div className="absolute -top-40 left-20 w-60 md:left-auto md:right-10 lg:top-20 sm:top-1/2 lg:w-80">
            
                <ImgClip src = "img/swordman-partial.webp" classforclip="absolute md:scale-125" />
            
                <ImgClip src = "img/swordman.webp" classforclip="sword-man-clip-path md:scale-125" />
            
            </div>


            <div className='flex flex-col items-center text-center'>

                <p className='font-general text-[10px] uppercase'>join us</p>

                <p className='text-5xl md:text-[6rem] special-font mt-10 w-full font-zentry leading-[0.9]  '>Sha<b>p</b>ing the <br/> new era <br/> of G<b>a</b>ming</p>

                <Button title="Contact Us" classes="cursor-pointer mt-10"/>

            </div>

        </div>

    </div>
  )
}

export default Contact