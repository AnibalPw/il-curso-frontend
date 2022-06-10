import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startToggleSwitch } from '../../actions/uiAction';



const toggleStyle ={
    mode:{
        dark:'right-0 absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer outline-none border-gray-700 focus:outline-none',
        light: 'toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer outline-none focus:outline-none bg-color-white',
        labelDark: 'toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer bg-gray-700',
        labelLight: 'toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer'
    }
}

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
};

const {dark, light, labelDark, labelLight} = toggleStyle.mode

export const ToggleSwitch = () => {

    const dispatch = useDispatch();
    const {theme} = useSelector(state => state.UI)
    const [isDark, setIsDark] = useState(theme === "dark" ? true : false)

    const darkMode =()=>{

        setIsDark(!isDark);
        
        localStorage.removeItem('theme')

        if(!isDark) {
            localStorage.theme = "dark"
            dispatch( startToggleSwitch() );
        }else{
            localStorage.theme = "light"
            dispatch( startToggleSwitch() );
        }
    }

    // useEffect(() => {
    //     setIsDark(!isDark);
    // }, [isDark])

    return (
        <div className="relative inline-block w-10 mr-2 align-middle transition duration-200 ease-in ">
            
            <motion.input 
                type="checkbox"  
                className={ (isDark) ? dark : light } 
                layout transition={spring} 
                value={isDark} 
                id="toggle" 
                name="toggle" 
                onClick={darkMode}/>

            <label htmlFor="toggle" className={(isDark) ? labelDark : labelLight} ></label>
        </div>
    )
}
