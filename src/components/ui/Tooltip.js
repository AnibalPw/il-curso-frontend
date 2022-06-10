import React, { useRef } from 'react'


export const Tooltip = ({children}) => {
    const tipRef = useRef(null);

    const handleMouseEnter = () => {
        tipRef.current.style.opacity = 1;
        tipRef.current.style.marginLeft = "0px";
    }

    const  handleMouseLeave = () => {
        tipRef.current.style.opacity = 0;
        tipRef.current.style.marginLeft = "10px";
    }

    return (
        <div
            className="relative flex items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path 
                fillRule="evenodd" 
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            {/* bg-gradient-to-b from-violet-500 text-black // bg-gradient-to-l from-black*/}
            <div
                className="absolute whitespace-no-wrap font-bold 
                bg-black
                lg:bg-gradient-to-r lg:from-black
                text-white px-4 py-2 rounded flex items-center transition-all duration-150 
                right-8
                lg:left-10 w-96"
                // style={{ left: leftPosition !== '' ? leftPosition : "10%" , opacity: 0 }}
                style={{ opacity: 0 }}
                ref={tipRef}
            >
                 <div
                    className="bg-black h-3 w-3 absolute -right-1 lg:-left-1"
                    style={{ transform: "rotate(45deg)" }}
                    // left: "-6px", 
                />
                 {children}
            </div>

        </div>
    )
}
