import React from 'react';
import PropTypes from 'prop-types';

import {  Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';


// const useAuth=()=>{

// //   const user=localStorage.getItem('user')
//     const { uid } = useSelector(state => state.auth)

//     if( uid ){
//         return true
//     } else {
//         return false
//     }
// }

const ProtectedRoutes = ( {isAuthenticated} ) =>{

//   const auth = useAuth()

//   console.log('auth', auth)
  return isAuthenticated ? <Outlet /> : <Navigate to="/auth/home" />
}

export default ProtectedRoutes;

// export const PrivateRoute = ({ isAuthenticated, redirectPath='/auth/signin', children })=>{
//     console.log('isAuthenticated private', isAuthenticated)

//     // if( isAuthenticated === false ){
//     //    return  <Navigate to={redirectPath} replace/>
//     // }

//     // return children ? children : <Outlet />
//     return(
//         ( isAuthenticated )
//             ? <Outlet /> 
//             : <Navigate to={redirectPath}/>
//     )

// }

// export const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {

//     return (
//         <Route { ...rest }
//             component={ (props) => (
//                 ( isAuthenticated )
//                     ? ( <Component { ...props } /> )
//                     : ( <Navigate to="/auth/signin" /> )
//             )}
        
//         />
//     )
// }

// PrivateRoute.propTypes = {
//     isAuthenticated: PropTypes.bool.isRequired,
//     component: PropTypes.func.isRequired
// }
