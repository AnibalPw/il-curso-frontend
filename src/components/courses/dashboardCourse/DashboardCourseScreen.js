import React from 'react'
import { Route, Routes, useParams, useRoutes } from 'react-router-dom';


import { DashboardCourseLayout } from './DashboardCourseLayout';


import { BasicInformationForm } from './Forms/courseDetail/BasicInformationForm';
import { CourseInformationForm } from './Forms/courseInformation/CourseInformationForm';
import { ContentCourseScreen } from './Forms/courseContent/ContentCourseScreen';



export const DashboardCourseScreen = () => {

  let routes = [
    {
      path: '/',
      element: <DashboardCourseLayout />,
      children: [
        { 
          index: true,
          element: <CourseInformationForm /> 
        },
        { 
          path: '/content',
          element: <ContentCourseScreen /> 
        },
        { 
          path: '/basic',
          element: <BasicInformationForm /> 
        },
      ],
    },
    
  ];
  
  // const { courseTitle } = useParams();
  const element = useRoutes(routes);

  return (
    <div>
      { element }
    </div>
  )
}
