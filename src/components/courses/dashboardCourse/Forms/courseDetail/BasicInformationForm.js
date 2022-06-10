import React from 'react'

export const BasicInformationForm = () => {
    
  return (
    <div style={{background: '#212429', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 1px 4px'}}
        className=" bg-white rounded p-6 shadow-lg h-full ">

            <h3 className="text-3xl w-full text-center ">Datos adicionales del curso</h3>
            
            <div className="mb-4 mt-3 text-lg font-medium">
            
                <form 
                // onSubmit={handleSubmit}
                >
                    <div className="grid grid-cols-4 grid-flow-row gap-2 space-y-1 ">

                        <label > Título del curso </label>
                        <input 
                        type="text"
                        className="col-start-1 col-span-4 w-full 
                        focus:outline-none text-gray-500 rounded-md p-1 pl-2 mt-9"
                        name="tituloCurso"
                        // value={tituloCurso}
                        autoComplete="off"
                        // onChange={handleInputChange}
                        placeholder="Título del curso" />

                        <label > Descripción del curso </label>
                            <textarea 
                            className="col-start-1 col-span-4 w-full shadow  border py-2 px-3 focus:outline-none text-gray-500 rounded-md leading-tight" 
                            rows={5} 
                            tabIndex="2"
                            placeholder="Agrega una breve descripción al curso" 
                            autoComplete="off"
                            name="descripcionCurso"
                            // value={descripcionCurso}
                            // onChange={handleInputChange}
                            ></textarea>

                        <label>Información básica</label>
                            
                            <select
                                className="col-start-1 col-span-1 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border 
                                border-gray-200 rounded-md p-2 mt-6 pr-10"
                                name="idioma"
                                // value={idioma}
                                // onChange={handleInputChange}
                                >
                                 <option value="">Selecciona un idioma</option>
                                 <option value="Español">Español</option>
                               {/* {
                                categorias.map(cat => 
                                    <option key={cat._id} value={cat._id}>
                                        {
                                            cat.categoryName
                                        }
                                    </option>    
                                )
                                } */}
                            </select>
                            <select
                                className="col-start-2 col-span-1 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border 
                                border-gray-200 rounded-md p-2 mt-6 pr-10"
                                name="nivelCurso"
                                // value={nivelCurso}
                                // onChange={handleInputChange}
                            >
                                {/* Crear estas opciones como se crean los roles */}
                                <option value="">Selecciona un nivel</option>
                                <option value="Principiante">Principiante</option>
                                <option value="Intermedio">Intermedio</option>
                                <option value="Avanzado">Avanzado</option>
                                {
                                // categorias.map(cat => 
                                //     <option key={cat._id} value={cat._id}>
                                //         {
                                //             cat.categoryName
                                //         }
                                //     </option>    
                                // )
                                }
                            </select>
                            
                            <select
                                // disabled={disable}
                                className="col-start-3 col-span-1 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border 
                                border-gray-200 rounded-md p-2 mt-6 pr-10"
                                name="categoria"
                                // value={categoria}
                                // onChange={handleInputChange}
                                // onClick={handleCargarSubCategoria}
                            >
                                <option value={-1}>Selecciona una categoría</option>
                                {/* {
                                categorias.map(cat => 
                                    <option key={cat._id} value={cat._id}>
                                        {
                                            cat.categoryName
                                        }
                                    </option>    
                                )
                                } */}
                            </select>
                            <select
                                // disabled={disable}
                                className="col-start-3 col-span-1 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border 
                                border-gray-200 rounded-md p-2 mt-6 pr-10"
                                name="subCategoria"
                                // value={subCategoria}
                                // onChange={handleInputChange}
                            >
                                <option value="">Selecciona una subcategoría</option>
                                {/* {
                                   subCategorias.map( subCat => 
                                    
                                    (idCategorias !== -1 && idCategorias === subCat.category) && 
                                    <option key={subCat._id} value={subCat._id}>
                                        {
                                            subCat.subCategoryName
                                        }
                                    </option>

                                    )
                                } */}
                            </select>

                        <div className="col-start-4 row-start-6 ">
                            {/* <TooltipComponent tooltipTextBold="Nota:" tooltipText="Una vez publicado el curso no podrás cambiar la categoría ni la subcategoría">

                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                </svg>
                            </TooltipComponent> */}
                        </div>


                            <label className="col-start-1 col-span-2"> Imagen del curso </label>
                            <div className="col-start-2 col-span-2 row-span-6 ">
                                <div className="mt-2 flex justify-center  overflow-hidden relative  border-2 border-gray-300 border-dashed rounded-md">

                                    <button 
                                    type="button"
                                    className="space-y-1 text-center px-14 pt-14 pb-14 w-full focus:outline-none">

                                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>

                                        <div id="previewContainer" className="">

                                        </div>

                                        <div className="flex justify-center text-sm text-gray-600 w-full ">
                                            {/* <label htmlFor="file-upload" 
                                            className={`relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 
                                            focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500
                                            ${(activeCurso?.thumbnail.originalName) && 'ml-28'}
                                            `}>
                                            
                                            {
                                                (activeCurso?.thumbnail.originalName)
                                                ? 
                                                <span>{activeCurso?.thumbnail.originalName}</span>
                                                :
                                                (files?.name) ? <span>{files.name}</span> : <span>Subir un archivo</span>
                                            }
                                           
                                            </label> */}

                                            <input 
                                                // id="thumbnail" 
                                                // name="thumbnail" 
                                                id="vid_cursos" 
                                                name="vid_cursos" 
                                                type="file" 
                                                accept="image/*"
                                                // className="sr-only cursor-pointer absolute block opacity-0 pin-r pin-t w-full" 
                                                className="w-full h-full cursor-pointer absolute block opacity-0 pin-r pin-t -top-0 left-0 border border-black " 
                                                // ref={inputFileThumbnail}
                                                // onChange={handleInputFileChange}
                                                />
                                            {/* {
                                                (files?.name) ? '' :  <p className="pl-1">o arrastre y suelte</p>
                                            } */}
                                            
                                        </div>

                                        <p className="text-xs text-gray-500">
                                            PNG, JPG, sin texto en la imagen y con un peso máximo de 2MB
                                        </p>
                                    </button>
                                </div>
                            </div>
                       

                    </div>
                    <div className="flex justify-end mt-4 mb-0">
                        <button type="submit" className="justify-self-end px-3 py-3 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none ">
                            Guardar información
                        </button>
                    </div> 
                </form>

            </div>
        </div>
  )
}
