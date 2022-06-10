import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import { startChecking } from '../actions/authAction';
import { startToggleSwitch } from '../actions/uiActions';


// import { startToggleSwitch } from '../actions/uiActions';
import { AuthRouter } from './AuthRoute';
import { DashboardRoutes } from './DashboardRoutes';

import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes  from './PublicRoutes';

export const AppRouter = () => {

    const dispatch = useDispatch()

    // const { checking } = useSelector(state => state.auth)
    const { checking, uid } = useSelector(state => state.auth)
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        
        dispatch( startChecking() );

        dispatch( startToggleSwitch() );

        if(uid){
            setIsLoggedIn( true )
        }else{
            setIsLoggedIn( false )
            console.log('ya acabó la sesión')
        }

    }, [dispatch, uid, setIsLoggedIn])

    if( checking ){
        return ( <h5> Cargando... </h5> )
    }

    return (
        <Router>
            <div>
                <Routes>
                    <Route element={<ProtectedRoutes isAuthenticated={isLoggedIn} />}>
                        <Route path='/*' element={<DashboardRoutes />}></Route>
                    </Route>

                     {/** Wrap all Route under PublicRoutes element */}
                    <Route path="/auth" element={<PublicRoutes isAuthenticated={isLoggedIn} />}>
                        <Route path="/auth/*" element={<AuthRouter />}/>
                    </Route>

                 
                </Routes>
            </div>
        </Router>
    )
}
