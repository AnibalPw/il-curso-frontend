import React from 'react'
import { Link } from 'react-router-dom'
// import { icons } from '../../assets/icons'

export const LinkButtonComponent = ({ redirectTo, titleBtn, tipoBtn, svgHeightWidth}) => {

    return (
        <div className="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
            <div className="flex items-center justify-between">

            <div className="text-lg leading-6 font-medium text-black"></div>
            {
                // icons.filter( icon => icon.name === tipoBtn)
                // .map( icon => (

                    <Link 
                        // key={icon.name}
                        to={redirectTo}
                        className='hover:bg-light-blue-200 hover:text-light-blue-800 group flex items-center rounded-md bg-light-blue-100 text-light-blue-600 text-sm font-medium px-4 py-2'
                        // className={ icon.btnStyle }
                    >

                        <svg className={`${ svgHeightWidth } group-hover:text-light-blue-600 text-light-blue-500 mr-2`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={'M12 6v6m0 0v6m0-6h6m-6 0H6'} />
                        </svg>


                        {titleBtn}

                    </Link>
                // ))
            }
    
            </div>
        </div>
        
    )
}
    
    // {/* {
    // (icon.iconSvgStyle !== undefined && icon.iconSvgStyle !== '')
    // &&
    // <svg className={`${SvgAnchoAlto} ${icon.iconSvgStyle}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    //     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={`${icon.pathSvg}`} />
    // </svg>
    // } */}