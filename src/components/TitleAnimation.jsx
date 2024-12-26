import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'

const TitleAnimation = ({title , DefaultStyles}) => {

    const containerRef = useRef(null);

    useEffect(() => {
        
        const cntx = gsap.context(() => {
            const titleAnime = gsap.timeline({
                scrollTrigger : {
                    trigger : containerRef.current,
                    start : '100 bottom',
                    end : 'center bottom',
                    toggleActions : 'play none none reverse'
                }   
            });

            titleAnime.to('.animated-word' , { 
                opacity : 1,
                transform : 'translate3D(0,0,0) rotateY(0deg) rotateX(0deg)',
                ease : 'power2.inOut',
                stagger : 0.02,
            })
        } , containerRef);
        
        return ()=>cntx.revert();

    } , [])

    return (
        
        <div ref = {containerRef} className={`animated-title ${DefaultStyles}`}>{title.split('<br/>').map((codeline , index) => (
            <div key={index} className='flex-center max-w-full flex-wrap gap-2 md:gap-3 px-10'>
                {codeline.split(' ').map((word ,i) => (
                    <span key ={i} className='animated-word' dangerouslySetInnerHTML={{__html:word}}/>
                ))}
            </div>
        ))}</div>
    )
}

export default TitleAnimation