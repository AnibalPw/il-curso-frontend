import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogin } from '../../actions/authAction';
import { useForm } from '../../hooks/useForm';
// import GoogleAuth from './GoogleAuth';

import loginsvg from '../../assets/loginsvg.png'

export const LoginScreen = () => {

    const dispatch = useDispatch()
    const [theme, setTheme] = useState('')

    const [ formValues, handleInputChange ] = useForm({
        lEmail: '',
        lPassword: ''
    });
    
    const { lEmail, lPassword } = formValues;


    const handleLoginSubmit = ( e ) =>{
        e.preventDefault();
        
        dispatch( startLogin( lEmail, lPassword ) )
    }

    return (
        
      <div className={` 
      ${ ( theme === 'dark') 
      ? 'min-h-screen text-white flex justify-center overflow-y-hidden' 
      : 'min-h-screen bg-gray-100 text-gray-900 flex justify-center overflow-y-hidden' }`}>
        <Link
          to='/auth/home'
          className=' text-indigo-500 dark:text-white text-md mt-4 ml-2 absolute left-0 flex'
        >
          <svg xmlns="http://www.w3.org/2000/svg" 
          className="icon icon-tabler icon-tabler-arrow-back-up" width="24" height="24" 
          viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1"></path>
          </svg>
          Volver al inicio
        </Link>
        
        <div className='max-w-screen-xl m-20 sm:m-20 bg-white dark:bg-gray-800 shadow rounded-lg flex justify-center flex-1'>

          <div className='flex-1 bg-indigo-100 dark:bg-blue-gray-800 text-center hidden lg:flex'>
            <div
              className='m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat'
              style={{ backgroundImage: `url(${loginsvg})` }}
            ></div>
          </div>

          <div className='lg:w-1/2 xl:w-5/12 p-2 sm:p-12'>
            {/* mt-12 */}
            <div className='mt-20 sm:mt-8 flex flex-col items-center'>
              <h1 className='text-2xl xl:text-3xl font-extrabold text-gray-900 dark:text-white'>
                Iniciar sesión en IL Cursos

              </h1>
              <div className='w-full flex-1 mt-8 text-indigo-500 '>

                  <div className='flex flex-col items-center'>

                    {/* <GoogleAuth /> */}
                  
                  </div>
                  {/* my-12 */}
                  <div className='my-5 mb-8 border-b text-center'>
                    <div className='leading-none px-2 inline-block text-sm text-gray-600 dark:text-white tracking-wide font-medium 
                    bg-white dark:bg-gray-800 transform translate-y-3/4'>
                      O inicia sesión por correo
                    </div>
                  </div>

                  <form onSubmit={ handleLoginSubmit }
                  className="mx-auto max-w-xs relative" >
                      <input 
                          type="text"
                          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 
                          text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                          placeholder="Correo"
                          name="lEmail"
                          value={ lEmail }
                          onChange={ handleInputChange }
                        />

                        <input
                          type="password"
                          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 
                          text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                          placeholder="Contraseña"
                          name="lPassword"
                          value={ lPassword }
                          onChange={ handleInputChange }
                        />

                    <button
                      type='submit'
                      className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 
                      rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center 
                      justify-center focus:shadow-outline focus:outline-none'
                    >
                      <i className='fas fa-sign-in-alt  w-6 -ml-2' />
                      <span className='ml-3'>Iniciar sesión</span>
                    </button>

                    <div className="flex justify-center items-center dark:text-white">
                      <p className="mr-24">¿Aún no tienes una cuenta?</p>
                      <Link to="/auth/signup"
                        className="no-underline hover:underline text-indigo-500 dark:text-white text-md text-right 
                        absolute flex items-center justify-center w-full max-w-xs font-bold shadow-sm"
                      >
                        <span className='ml-48'>Registrarte</span> 
                      </Link>
                    </div>

                    <div className="flex flex-col items-center">
                      <Link
                        to='/auth/forgotPassword'
                        className='no-underline hover:underline text-indigo-500 dark:text-white text-md justify-center items-center absolute mt-2'
                      >
                        ¿Olvidó su contraseña?
                      </Link>
                    </div>

                </form>
              
              </div>
            </div>

          </div>

        </div>
      </div>

    )
}
