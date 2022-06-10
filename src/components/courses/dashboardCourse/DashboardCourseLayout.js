import { Transition } from '@headlessui/react';
import React, { useState } from 'react'
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom'
import { HeaderComponent } from '../../ui/HeaderComponent';

const routes = [ 
    { 
        path: '',
        titleName: 'Información del curso',
        linkName: 'Información del curso'
    }, 
    { 
        path:'/content', 
        titleName: 'Contenido del curso',
        linkName: 'Programa del curso'
    }, 
    {
        path:'/basic',
        titleName: 'Detalles del curso',
        linkName: 'Página de inicio del curso'
    } 
]

export const DashboardCourseLayout = () => {

    const [isClose, setIsClose] = useState(false)
    const { courseTitle } = useParams();
    const { pathname } = useLocation();

    const url = `/course/manage/${ courseTitle }`

    const handleClose =()=>{
        setIsClose(!isClose)
    }
   
    
  return (
    <div>
        <HeaderComponent title={ courseTitle } borrador={true} />

        <div className="transition-all duration-1000 ease-in-out lg:static xl:static">

            <div className="grid grid-cols-1 grid-rows-2 gap-8 grid-flow-row
            lg:grid-cols-4 lg:gap-2 
            m-5 mb-5 transition-all duration-1000 ease-in-out
            ">
                {/* lg:grid-cols-4 lg:gap-2 
                m-5 mb-5 transition-all duration-1000 ease-in-out */}
            {/* 
            grid grid-rows-3 grid-flow-col gap-4
            grid grid-cols-1 grid-rows-2 gap-8 grid-flow-row md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:gap-2 lg:grid-flow-row 
            m-5 mb-5 transition-all duration-1000 ease-in-out lg:static xl:static */}

                <div
                    className='col-start-2 text-black dark:text-white 
                    hidden shadow-lg rounded p-4 xl:text-sm ml-5 lg:ml-9 xl:ml-9 
                    inset-0 h-full fixed z-40
                    lg:h-auto xl:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block
                    transition-all duration-1000 ease-in-out'
                >

                    <nav className="px-1 pt-40 overflow-y-auto font-medium text-base sm:px-3 xl:px-5 lg:text-sm pb-10 lg:pb-14 sticky">
                        <ul>
                        {/* {/* pathname === `${url}` || text-cyan-700  */}
                        {
                            routes.map( (route, index) =>(
                                <li 
                                key={index}
                                className="mt-8 ">
                                    <h5 className="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900">
                                        { route.titleName }
                                    </h5>
                                    <ul>
                                        <li>
                                            <NavLink 
                                                // activeClassName="text-cyan-700" 
                                                to={url + route.path} 
                                                className={`px-3 py-2 transition-colors duration-200 relative block 
                                                ${ 
                                                    ( pathname !== url + route.path ) 
                                                    && 'text-gray-600 dark:text-gray-400' 
                                                }`}
                                            >
                                                { route.linkName }
                                            </NavLink>
                                        </li>
                                    </ul>
                                    
                                </li>
                            ))
                        }

                        </ul>
                    </nav>
                </div>

                {/* -mr-2 -my-4 md:hidden */}
                <div className="row-end-1 row-span-1 lg:hidden transition-all duration-1000 ease-in-out">
                    <button
                    type="button" 
                    className="inline-flex items-center justify-center
                    text-gray-400 hover:text-gray-500 
                    focus:outline-none transition duration-150 ease-in-out"
                    onClick={handleClose}>
                    
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                 
                <Transition 
                    show={isClose}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <nav className="overflow-y-auto font-medium text-base lg:text-sm lg:hidden md:mr-24 transition-all duration-1000 ease-in-out">
                        <ul
                        // style={{ width: '525px' }}
                        className='inline-flex flex-wrap'
                        >
                        {
                            routes.map( (route, index) =>(
                                <li 
                                key={index}
                                className="mt-8">
                                    <h5 className="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900">
                                        { route.titleName }
                                    </h5>
                                    <ul>
                                        <li>
                                            <NavLink 
                                                // activeClassName="text-cyan-700" 
                                                to={`${url}/${route.path}`} 
                                                className={`px-3 py-2 transition-colors duration-200 relative flex flex-wrap
                                                ${ ( pathname !== `${url}/${route.path}` ) && 'text-gray-600 dark:text-gray-400' }`
                                            }>
                                                { route.linkName }
                                            </NavLink>
                                        </li>
                                    </ul>
                                    
                                </li>
                            ))
                        }

                        </ul>
                    </nav>

                </Transition>

                {/* Main */}
                <div className="lg:col-start-2 row-start-1 row-span-full col-span-3 lg:mr-14">
                    <Outlet />
                </div>

            </div>

        </div>


    </div>
  )
}
