import React from 'react';
import PropTypes from 'prop-types';

import { Navigate, Outlet } from 'react-router-dom';

// const useAuth = () =>{

//     const { uid } = useSelector(state => state.auth)

//     if( uid ){
//         return true
//     } else {
//         return false
//     }
// }

const PublicRoute = ( {isAuthenticated} ) =>{

    // const auth = useAuth()

    return isAuthenticated ? <Navigate to="/"/> : <Outlet/>
    // return isAuthenticated ? <Navigate to="/dashboard"/> : <Outlet/>
}

export default PublicRoute;

// export const PublicRoute = ({ isAuthenticated, redirectPath='/'}) =>{

//     console.log('isAuthenticated public', isAuthenticated)
//     return(
//         ( isAuthenticated )
//             ? <Navigate to={redirectPath} replace/>
//             : <Outlet />
//     )
// }

// export const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => {

   
//     return (
//         <Route { ...rest }
//             component={ (props) => (
//                 ( isAuthenticated )
//                     ? ( <Navigate to="/" /> )
//                     : ( <Component { ...props } /> )
//             )}
        
//         />
//     )
// }

// PublicRoute.propTypes = {
//     isAuthenticated: PropTypes.bool.isRequired,
//     component: PropTypes.func.isRequired
// }
