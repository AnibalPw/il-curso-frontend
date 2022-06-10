import React, { Fragment } from 'react';
import { Routes, Route, Navigate, Outlet  } from 'react-router-dom';

import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { HomeScreen } from '../components/ui/HomeScreen';



// import { ActiveAccount } from '../components/auth/ActiveAccount';

// import { ForgotPass } from '../components/auth/ForgotPass';
// import { HomeScreen } from '../components/auth/HomeScreen';


// import { LoginScreen } from '../components/auth/LoginScreen';
// import { RegisterScreen } from '../components/auth/RegisterScreen';
// import { ResetPass } from '../components/auth/ResetPass';


export const AuthRouter = () => {


    return (        
        <div className="auth__main">
            <div className="auth__box-container">
                
                <Routes>
           
                    <Route
                        index 
                        path='/home'
                        element={ <HomeScreen /> }
                    />
                     <Route
                        index
                        path='/signin'
                        element={ <LoginScreen /> }
                    />
                     <Route
                        index
                        path='/signup'
                        element={ <RegisterScreen /> }
                    />

                    {/* <Navigate to="/auth/home" replace /> */}

                
                </Routes>
            </div>

        </div>
    )
}


                    
// {/* 
//                     <Route
//                         path="/auth/signin"
//                         component={ LoginScreen }
//                     />

//                     <Route 
//                         path="/auth/signup"
//                         component={ RegisterScreen }
//                     />

//                     <Route 
//                         path="/auth/forgotPassword"
//                         component={ ForgotPass }
//                     />

//                     <Route 
//                         path="/auth/resetPassword"
//                         component={ ResetPass }
//                     />
//                     <Route 
//                         path="/auth/activationAccount"
//                         component={ ActiveAccount }
//                     />
//                      */}