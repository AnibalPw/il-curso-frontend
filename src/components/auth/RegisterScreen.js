import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { startRegister } from '../../actions/authAction'
import { useForm } from '../../hooks/useForm'
// import { EmailSend } from './EmailSend'
// import GoogleAuth from './GoogleAuth'

import loginsvg from '../../assets/loginsvg.png'
import { Tooltip } from '../ui/Tooltip'


const cursorNotAllowed = "cursor-not-allowed"

// const themeDark = localStorage.getItem( 'theme' )
let caracter = new RegExp("^(?=.[a-zA-Z])")
let caracEspecial = new RegExp("^(?=.[!@#$%&*])")
let longitud = new RegExp("^(?=.{8,})")
let numero = new RegExp("^(?:.*[0-9])")
let espacio = new RegExp(/\s/);
let correo = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$")

export const RegisterScreen = () => {
  

    const dispatch = useDispatch()
    // const MySwal = withReactContent(Swal)

    const rt = localStorage.getItem('tokenActivacion');
    const [theme, setTheme] = useState('')
    //Loading
    const [isFormValid, setIsFormValid] = useState(false);
    const [loading, setLoading] = useState(true);
    
    const [formValues, handleInputChange] = useForm({
        name:'', 
        lastName:'', 
        email:'', 
        password1:'',
        password2:''
    })


    const { name, lastName, email, password1, password2 } = formValues;

    useLayoutEffect(() => {
      
      const themeDark = localStorage.getItem( 'theme' )

      if (themeDark !== null){
        setTheme(themeDark)
      } 
      // console.log(`theme`, theme)
        
    }, [theme])


    const handleKeyUp =(e)=>{

    
      let regExp = [
          longitud,
          numero,
          // espacio,
          // caracter,
          // caracEspecial,
         
      ]
    }



    const handleRegisterSubmit = (e) =>{
        e.preventDefault();

 
        dispatch( startRegister( email, password1, name, lastName ) )
    }

    //Change
    useEffect(() => {

      let LoadTime = 0;
      let valido = false;

      if(name === ''  && lastName === '' &&
        email === '' && password1 === '' && password2 === ''){
          LoadTime = 1500
          valido = false
      }else{
          LoadTime = 4000
          valido = true
      }
      setTimeout(() => {
          setLoading(true);
          return setIsFormValid(valido);
      }, LoadTime);
      
  }, [loading, name, lastName, email, password1, password2])


    return (

    //   (rt !== null && isFormValid && loading)
    //   ? 
    //       <EmailSend />
    //   :

      <div className={ ` ${ (theme === 'dark') ? 'min-h-screen text-white flex justify-center overflow-y-hidden' :
       'min-h-screen bg-gray-100 text-gray-900 flex justify-center'}` }>

        <Link
          to='/auth/home'
          className=' text-indigo-500 dark:text-white text-md mt-2 ml-2 absolute left-0 flex'
        >
            <svg xmlns="http://www.w3.org/2000/svg" 
              className="icon icon-tabler icon-tabler-arrow-back-up"
               width="24" height="24" viewBox="0 0 24 24" 
               strokeWidth="2" stroke="currentColor" fill="none" 
               strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1"></path>
            </svg>
            Volver al inicio
        </Link>

        <div className='max-w-screen-xl m-20 sm:m-20 bg-white dark:bg-gray-800 shadow rounded-lg 
        flex justify-center flex-1'>

          {/* p-6 */}
          <div className='lg:w-1/2 xl:w-5/12 p-2 sm:p-12'>
            <div className='mt-20 sm:mt-8 flex flex-col items-center'>

              <h1 className='text-2xl xl:text-3xl font-extrabold text-gray-900 dark:text-white'>
                Registrarse en InterLearn
              </h1>
              
              <div className='w-full flex-1 mt-8 text-indigo-500'>

                <div className='flex flex-col items-center'>
                  
                  {/* <GoogleAuth /> */}
                
                </div>
                    {/* my-12 */}
                <div className='my-5 mb-8 border-b text-center'>
                  <div className='leading-none px-2 inline-block text-sm text-gray-600 dark:text-white tracking-wide font-medium bg-white 
                  dark:bg-gray-800 transform translate-y-3/4'>
                    O registrarse por correo
                  </div>
                </div>

                <form onSubmit={ handleRegisterSubmit } className="mx-auto max-w-xs relative " >
                      {/* bg-gray-400 */}
                  <div className="flex space-x-1">

                    <input
                        type="text"
                        className="w-40 mr-1 -ml-1 inline-block px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 
                        placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" 
                        placeholder="Nombre"
                        autoComplete="off"
                        name="name"
                        value={ name }
                        onChange={ handleInputChange }
                    />
                    <input
                        type="text"
                        className="w-40 mr-1 -ml-1 inline-block px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 
                        placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" 
                        placeholder="Apellidos"
                        autoComplete="off"
                        name="lastName"
                        value={ lastName }
                        onChange={ handleInputChange }
                    />
                  </div>
          
                  <input
                      type="email"
                      className="w-full  px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      placeholder="Correo"
                      autoComplete="off"
                      name="email"
                      value={ email }
                      onChange={ handleInputChange }
                  />
          

                  <input
                      type="password"
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm 
                      focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      placeholder="Contraseña" 
                      name="password1"
                      value={ password1 }
                      onChange={ handleInputChange }
                      // onKeyUp={handleKeyUp}
                  />

                    <div className='absolute -right-10 top-40'>
                        <Tooltip>
                          <div className="flex flex-wrap m-4 mt-4 ml-0 lg:content-center font-semibold transition-all duration-1000 ease-in-out space-y-6">
                              <p className="w-full flex"> 
                                  Tu contraseña debe tener 8 o más caracteres

                                  <svg id="longitud" className="w-6 h-6 ml-2 invisible" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                              </p>
                              <p className="w-full flex "> 
                                  Tu contraseña debe tener al menos 1 número
                                  <svg id="numero" className="w-6 h-6 ml-2 invisible" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                              </p>
                          
                              <p className="w-full flex "> 
                                  Su contraseña no debe contener espacios
                                  <svg id="espacio" className="w-6 h-6 ml-2 visible"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                              </p>
                              <p className="w-full flex "> 
                                  Ambas contraseñas coinciden 
                                  <svg id="contrasena2" className="w-6 h-6 ml-2 invisible" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                              </p>
                            </div>
                        </Tooltip>
                    </div>
                 
          
                  <input
                      type="password"
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      placeholder="Repita la contraseña" 
                      name="password2"
                      value={ password2 }
                      onChange={ handleInputChange }
                    //   onKeyUp={handleKeyUpCoinciden}
                  />
                     <button
                      type='submit'
                      className={`mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full 
                      py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center 
                      justify-center focus:shadow-outline focus:outline-none ${(loading === false) ?cursorNotAllowed : ''}`}
                      disabled={!loading}
                      >
                          <svg className={(loading === false) ? "animate-spin h-5 w-5 mr-3" : " h-5 w-5 invisible"} viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <i className={(loading === true) ? 'fas fa-user-plus fa 1x w-6 -ml-2' : 'invisible'} />
                          <span className='ml-3'> Crear cuenta</span> 
                          
                    </button>
                  
                </form>

                <div className='flex justify-center items-center dark:text-white'>
                  <p className="mr-28">¿Ya tienes una cuenta?</p>
                
                      <Link  to="/auth/signin"
                          className="no-underline hover:underline text-indigo-500 dark:text-white text-md text-right absolute flex items-center justify-center w-full max-w-xs font-bold"
                      >
                          <span className='ml-40'>Iniciar sesión</span> 
                      </Link>
                </div>
              
              </div>
            </div>
          </div>

          <div className='flex-1 bg-indigo-100 dark:bg-blue-gray-800  text-center hidden lg:flex'>
            <div
              className='m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat'
              style={{ backgroundImage: `url(${loginsvg})` }}
            ></div>
          </div>
      
        </div>
      
      </div>

    )
}
