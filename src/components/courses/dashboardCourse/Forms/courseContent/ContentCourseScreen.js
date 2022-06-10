import React from 'react'
import { Outlet } from 'react-router-dom'

export const ContentCourseScreen = () => {
    
  return (
    <div 
    style={{background: '#212429', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 1px 4px'}}
    className="bg-white rounded p-6 shadow-lg h-full">

        <h3 className="text-3xl w-full text-center ">Contenido del curso</h3>

        <div>
            {/* <SeccionesCursos /> */}
        </div>
        <Outlet />
    </div>
  )
}
