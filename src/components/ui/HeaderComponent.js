import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { NavBarComponent } from './NavBarComponent';
// import { ModalPuntuarCurso } from '../cursos/ReproductorVideos/ModalPuntuarCurso';
// import { obtenerCalificacionDadaAlCurso } from '../../actions/getCursoAction';


export const HeaderComponent = ({ title, borrador, puntuar}) => {

    const dispatch = useDispatch()
   
    const [modal, setIsModal] = useState(false)

    const selectModal =(e)=>{ 
        setIsModal(!modal) 



    }

    return (

        <div>
            
            <NavBarComponent />

            <header 
            style={{zIndex: '1000'}}
            className="bg-gray-50 text-black dark:bg-gray-900 dark:text-white
            shadow lg:z-50 xl:z-50 sticky top-0"
            >
                <div
                className="mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-between"> {/* max-w-7xl */}
                
                    <div className="flex justify-start">
                        <h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white">
                            {title}
                        </h1>
                        {
                            (borrador === true) &&
                        
                            <span className="ml-2 mt-1 light:text-gray-700 text-xs uppercase">Borrador</span>
                        }
                    </div>

                    {  
                        (puntuar === true) &&
                        <div className="flex justify-end">
                            
                            <button 
                            onClick={ e=>selectModal(e) }
                            className="flex items-center focus:outline-none hover:text-amber-300">
                                <svg className="w-6 h-6" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z">
                                    </path>
                                </svg>
                                <span className="ml-2">
                                    Deja una calificación
                                </span>
                            </button>
                            {/* <button className="ml-2 mt-1 light:text-gray-700 text-xs uppercase">Borrador</button> */}
                        </div>
                    }

                </div>


            </header>
        </div>
    )
}

HeaderComponent.propTypes ={
    title: PropTypes.string.isRequired
}