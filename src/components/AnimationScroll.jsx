

import { useRef, useState, useEffect } from "react"

// eslint-disable-next-line react/prop-types
export default function AnimationScroll({ children }) {

    const [isActive, setIsActive] = useState(false);

    let ref = useRef(null);
    let className = 'scroll-animation';


    useEffect(() => {
        function handleScroll() {
            const top = ref.current.getBoundingClientRect().top;
            if(top < 370) {
                setIsActive(true);
            }
        };


        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, []);

    // if(!isActive) {
    //     return (
    //         <div ref={ref}>

    //         </div>
    //     )
    //     // return null;
    // }


    return (
        <div className="min-h-[300px] mb-10">
            <div 
            className={isActive ? className : ''} 
            ref={ref} 
            >
                
            {isActive && children}
            </div>
        </div>
        
    )

}