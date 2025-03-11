

import { useRef, useState, useEffect } from "react"

// eslint-disable-next-line react/prop-types
export default function AnimationScroll({ children }) {

    const [isActive, setIsActive] = useState(false);

    let ref = useRef(null);
    let className = 'scroll-animation';


    useEffect(() => {
        function handleScroll() {
            const top = ref.current.getBoundingClientRect().top;
            if(top < 470) {
                setIsActive(true);
            }
        };


        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, []);

    return (
        <div className="min-h-[250px] mb-10">
            <div 
            className={isActive ? className : ''} 
            ref={ref} 
            >
                
            {isActive && children}
            </div>
        </div>
        
    )

}