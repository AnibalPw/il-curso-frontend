import React from 'react'
import elearning from '../../assets/undraw_Online_learning_re_qw08.svg'

export const BannerComponent = () => {
  return (
      <div 
      className="relative bg-gradient-to-b from-violet-500 
      transition-all duration-1000 ease-in-out
      xl:overflow-hidden">
            {/* h-[479px]  */}
        
        <div>
           
            <svg id="wave" style={{transform:"rotate(180deg)", transition: "0.3s"}} viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                        <stop stopColor="rgba(139, 92, 246, 1)" offset="0%"></stop>
                        <stop stopColor="rgba(234, 194, 255, 1)" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <path style={{transform:"translate(0, 0px)", opacity:"1"}} fill="url(#sw-gradient-0)" 
                d="M0,98L48,106.2C96,114,192,131,288,114.3C384,98,480,49,576,73.5C672,98,768,196,864,204.2C960,212,1056,131,1152,89.8C1248,49,1344,49,1440,106.2C1536,163,1632,278,1728,326.7C1824,376,1920,359,2016,326.7C2112,294,2208,245,2304,245C2400,245,2496,294,2592,285.8C2688,278,2784,212,2880,187.8C2976,163,3072,180,3168,171.5C3264,163,3360,131,3456,122.5C3552,114,3648,131,3744,155.2C3840,180,3936,212,4032,245C4128,278,4224,310,4320,334.8C4416,359,4512,376,4608,359.3C4704,343,4800,294,4896,228.7C4992,163,5088,82,5184,98C5280,114,5376,229,5472,302.2C5568,376,5664,408,5760,367.5C5856,327,5952,212,6048,171.5C6144,131,6240,163,6336,220.5C6432,278,6528,359,6624,392C6720,425,6816,408,6864,400.2L6912,392L6912,490L6864,490C6816,490,6720,490,6624,490C6528,490,6432,490,6336,490C6240,490,6144,490,6048,490C5952,490,5856,490,5760,490C5664,490,5568,490,5472,490C5376,490,5280,490,5184,490C5088,490,4992,490,4896,490C4800,490,4704,490,4608,490C4512,490,4416,490,4320,490C4224,490,4128,490,4032,490C3936,490,3840,490,3744,490C3648,490,3552,490,3456,490C3360,490,3264,490,3168,490C3072,490,2976,490,2880,490C2784,490,2688,490,2592,490C2496,490,2400,490,2304,490C2208,490,2112,490,2016,490C1920,490,1824,490,1728,490C1632,490,1536,490,1440,490C1344,490,1248,490,1152,490C1056,490,960,490,864,490C768,490,672,490,576,490C480,490,384,490,288,490C192,490,96,490,48,490L0,490Z"></path>
            </svg>
            
        </div>
        
        {/* sm:absolute sm:top-5 sm:right-10 top-10 right-56  lg:top-96 */}
        {/* sm:absolute sm:top-20 sm:right-0 lg:top-96 lg:right-64  */}
        {/* sm:w-80 sm:ml-auto sm:mr-auto sm:-mt-11 
        lg:mr-32 xl:mr-56
        md:w-11/12 xl:w-96 lg:ml-9 xl:ml-0 xl:top-0*/}
        <div className="flex justify-center 
        relative transition-all duration-1000 ease-in-out 
        w-80 ml-auto mr-auto -mb-20
        sm:-mb-28
        md:mr-5 md:-mt-40
        lg:w-80 lg:mr-32 lg:-mt-80
        xl:w-11/12 xl:-mt-80 xl:-mr-32 ">
         

            <div className=" w-96 z-50">
                <img src={elearning} alt="home" className="h-80 sm:h-96 w-96 rounded-t-lg "/>
            </div>
        </div>

        {/* bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center relative z-30 sm:-top-36 sm:right-32 */}
        {/* sm:-top-36 sm:right-32 */}
        
        {/* sm:-top-40 sm:right-32
        md:-top-40 md:right-32 md:-inset-20 */}
        <div 
        className="
            flex flex-wrap py-4 px-4  
            relative top-8 z-30 self-center
            bg-white rounded-xl shadow-lg 
            md:items-center md:-mt-64 md:right-32
            md:max-w-sm md:mx-auto
            xl:-top-60
            transition-all duration-1000 ease-in-out 
        ">
            
            <h1 className="text-4xl sm:text-5xl font-semibold">Brinda y recibe conocimiento</h1>
            <p className="text-3xl font-semibold">desde cualquier lugar del mundo sin salir de casa</p>
          
        </div>
        
    </div>
  )
}
