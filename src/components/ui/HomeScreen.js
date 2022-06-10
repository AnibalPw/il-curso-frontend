import React, { useEffect, useState } from 'react'
// import { NavBar } from '../ui/NavBar'

import { BannerComponent } from './BannerComponent'
import { CursosScreen } from '../courses/CursosScreen'
import { NavBarComponent } from './NavBarComponent'

export const HomeScreen = () => {

    return (
        <div 
        style={{ backgroundColor: '#282c34' }}
        className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-500">
            {/*bg-yellow-600 md:bg-red-700 lg:bg-pink-700 sm:bg-green-700 */}
            <NavBarComponent />
     
            <BannerComponent />

            {/* Container */}
            <main
                className='w-full max-w-[134rem]
                mr-auto ml-auto pr-10 pl-10
                '
            >
                <CursosScreen />
            </main>

        </div>

    )
}
