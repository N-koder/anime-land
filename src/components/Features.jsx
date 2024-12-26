import { useState , useRef } from "react";


const CardTilt = ({children , className}) => {

    const [TiltStyle , setTiltStyle] = useState('');

    const tiltcardref = useRef(null);

    const handleMouseMove = (event) => {
        if(!tiltcardref.current) return;

        const {left, top, width, height} = tiltcardref.current.getBoundingClientRect();

        // finding relative position of our mouse
        const relativeX = (event.clientX-left)/width;
        const relativeY = (event.clientY-top)/height;

        // giving tilt value
        const tiltX = (relativeY-0.5) * 5;
        const tiltY = (relativeX-0.5) * -5;

        const finalTilt = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95,0.95,0.95)`


        setTiltStyle(finalTilt)
    }

    const handleMouseLeave = () => {
        setTiltStyle('');
    }

    return(
        <div className={className} ref={tiltcardref} onMouseMove={handleMouseMove} onMoveLeave={handleMouseLeave} style={{ transform: TiltStyle }}>
            {children}
        </div>
    )
}

const FeatureCard = ({src , title , description}) => {
    return (
        <div className="relative size-full">

            <video src = {src} className="absolute left-0 top-0 size-full object-center object-cover" autoPlay muted loop />

            <div className="relative z-10 flex flex-col justify-between size-full p-5 text-white">

                <div>
                    <h1 className="bento-title special-font">{title}</h1>
                    {description && (
                        <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
                    )}
                </div>

            </div>
            

        </div>
    )
}

const Features = () => {
  return (
    <section className='bg-black pb-52'> 
        <div className='container mx-auto px-3 md:px-10'>
            <div className='px-5 py-32'>
            
                <p className='font-circular-web text-white text-lg'>Within the Metagame Dimension</p>
            

                <p className="max-w-wd  text-white text-lg font-circular-web opacity-50">
                    Step into a dynamic, ever-evolving universe where a colorful blend of products seamlessly integrates into your reality, creating a captivating overlay experience. 
                </p>
            
            </div>
        

            <CardTilt className='relative border-hsla w-full h-96 md:h-[65vh] overflow-hidden rounded-md mb-7'>
                <FeatureCard 
                    src = 'videos/feature-1.mp4' 
                    title = {<>radi<b>n</b>t</>} 
                    description = 'A seamless metagame app that turns your Web2 and Web3 gaming experiences into a thrilling adventure filled with rewards.'
                />
            </CardTilt>


            {/* Dynamic positioning */}
            <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
                
                <CardTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">

                    <FeatureCard 
                        src = "videos/feature-2.mp4"
                        title = {<>zig<b>m</b>a</>}
                        description="An NFT collection inspired by anime and gaming, crafted as the foundation for expansive IP growth."
                    />

                </CardTilt>

                <CardTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">

                    <FeatureCard
                        src = "videos/feature-3.mp4"
                        title={<>nex<b>u</b>s</>}
                        description="A gamified social hub that brings a playful twist to social interactions for Web3 communities."
                    />

                </CardTilt>

                
                <CardTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">

                    <FeatureCard
                        src = "videos/feature-4.mp4"
                        title={<>az<b>u</b>l</>}
                        description="A cross-world AI agent that enhances your gameplay, making it more enjoyable and productive."
                    />

                </CardTilt>

                <CardTilt className="bento-tilt_2">
                    <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
                        <h1 className="bento-title text-black max-w-64 special-font">Mo<b>r</b>e Com<b>i</b>ng S<b>oo</b>n</h1>
                    </div>
                </CardTilt>

                <CardTilt className="bento-title_2">
                    <video

                        src="videos/feature-5.mp4"
                        className="size-full object-cover object-center"

                        loop
                        autoPlay
                        muted

                    />
                </CardTilt>
            
            </div>


        </div>

    </section>
  )
}

export default Features