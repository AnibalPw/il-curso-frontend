import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { categoriesStartLoading } from '../../../../actions/categoriesAction'

import { courseStartAddNew } from '../../../../actions/courseInstructorAction'
import { useForm } from '../../../../hooks/useForm'

const initialState = {
    courseTitle: '',
    category: ''
}


export const NewCourseForm = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { categories } = useSelector(state => state.categories)

    const [ formValues, handleInputChange ] = useForm( initialState );
    let { courseTitle = '', category = '' } = formValues; 

    useEffect(() => {
        
        dispatch( categoriesStartLoading() )
        // dispatch( subCategoriaStartLoading() )

    }, [dispatch])

    const handleSubmit = (e) => {
        e.preventDefault();
    
        let errorMessage
        if( courseTitle === '' ){

            errorMessage = 'Ambos campos son obligatorios'
            console.log('errorMessage', errorMessage)
            return 
            // dispatch( errorPermisos() )
        }

        dispatch( courseStartAddNew( formValues ) )
        

        courseTitle = courseTitle.replace(/\s+/g, '-');
        navigate(`/course/manage/${ courseTitle }`, { replace: true })  

    
    }
    
  return (
    <div className="px-4 sm:px-6 lg:px-4 xl:px-6 pt-28 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4 justify-items-center ">

        <form 
        onSubmit={ handleSubmit }
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">

                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight 
                dark:text-white text-gray-900 sm:text-4xl">
                    Crea un título temporal
                </p>
                <p className="mt-2 text-lg leading-8 font-extrabold tracking-tight 
                dark:text-white text-gray-900">
                    Para iniciar con tu curso debes crear un título y seleccionar su categoría, esto los puedes editar más adelante antes de que publiques tu curso.
                </p>


                <input 
                type="text"
                className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border 
                border-gray-200 rounded-md p-2 mt-9" 
                name="courseTitle"
                value={courseTitle}
                autoComplete="off"
                onChange={handleInputChange}
                placeholder="Título del curso" />

                {/* CAMBIAR POR EL DROPDOWN DE TAILWIND */}
                <select
                    className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm 
                    text-black placeholder-gray-500 border 
                    border-gray-200 rounded-md p-2 mt-6 pr-10"
                    name="category"
                    value={category}
                    onChange={handleInputChange}
                >
                    <option value="">Seleccione una categoría</option>
                    {
                    categories.map(cat => 
                        <option key={cat._id} value={cat._id}>
                            {
                                cat.categoryName
                            }
                        </option>    
                    )
                }
                </select>

                <div className="space-x-2 mt-3">
                    
                    <Link to="/" className="justify-items-center px-5 py-3 border border-transparent text-base font-bold rounded-md text-red-700 
                    bg-red-100 hover:bg-red-200 focus:outline-none ">
                        Cancelar
                    </Link>    

                    <input type="submit" value="Crear curso" className="justify-items-center px-5 py-3 border border-transparent text-base font-bold rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none  
                    cursor-pointer " /> 

                </div>   
            
            </div>
        </form>

    </div>
  )
}
