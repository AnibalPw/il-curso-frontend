import React from 'react'
import { useSelector } from 'react-redux'
import { LinkButtonComponent } from '../ui/LinkButtonComponent'


export const CursosScreen = () => {
    
    const { uid } = useSelector(state => state.auth)


    return (
        <div>

            <div className="mx-auto py-6 sm:px-6 lg:px-8">

                <div className="px-4 py-6 sm:px-0">
                    <div className="rounded-lg flex justify-end ">{/* h-96 */}

                        <LinkButtonComponent
                            redirectTo='/cursos/cursosMatriculados'
                            titleBtn='Cursos matriculados'
                            // tipoBtn='btnDefault'
                        />

                        {
                            // (usuarioVerificado === true)
                            (uid)
                            &&
                            <LinkButtonComponent
                                redirectTo='/cursos/tusCursos'
                                titleBtn='Tus cursos'
                                // tipoBtn='btnDefault'
                            />
                        }
                        {
                            
                            (uid)
                            &&
                            <LinkButtonComponent
                                redirectTo='/course/new'
                                titleBtn='Crear nuevo curso'
                                svgHeightWidth='w-5 h-5'
                            /> 
                        }
                    </div>
                    <div className="border-gray-200 rounded-lg ">{/* h-96 */}
    
                        Slide cursos matriculados
                    </div>
                    <div className=" rounded-lg ">{/* h-96 */}
                    
                        Lista de cursos
                    </div>
                </div>

            </div>

        </div>
    )
}