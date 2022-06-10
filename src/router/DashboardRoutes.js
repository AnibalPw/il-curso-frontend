import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom';

import { createBrowserHistory } from 'history';


import ScrollToTop from './ScrollToTop';

import { HomeScreen } from '../components/ui/HomeScreen';

import { DashboardCourseScreen } from '../components/courses/dashboardCourse/DashboardCourseScreen';
import { NewCourseForm } from '../components/courses/dashboardCourse/Forms/NewCourseForm';


export const browserHistory = createBrowserHistory();



export const DashboardRoutes = () => {


    return (

        <Fragment>
            <div 
            style={{zIndex: '10000'}}
            className="z-50 relative">
            </div>

            <ScrollToTop />
            
            <Routes>
                <Route
                    exact
                    index
                    path="/"
                    element={ <HomeScreen /> }
                />
                <Route
                    exact
                    index
                    path="/course/new"
                    element={ <NewCourseForm /> }
                />
                <Route
                    // exact
                    // index
                    path="/course/manage/:courseTitle/*"
                    element={ <DashboardCourseScreen /> }
                />
        
                {/* <Route exact path="/cursos" component={CursosScreen}/> */}
                {/* <Route exact path="/publicaciones" component={PublicacionesScreen}/>  */}
            
                {/* <Route component={PublicacionesScreen} />    {/* //"/pageNotFound" */}
                {/* <Navigate to="/" />  */}
            </Routes>

        </Fragment>

    )
}
