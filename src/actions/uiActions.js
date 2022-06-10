import { types } from "../types/types";


export const startToggleSwitch = () => {
    return async( dispatch ) => {

        let htmlContainer = document.querySelector('html')
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            htmlContainer.classList.remove('light')
            htmlContainer.classList.add('dark')

        } else if (localStorage.theme === 'light') {
            htmlContainer.classList.remove('dark')
            htmlContainer.classList.add('light')
        }
        //   console.log('localStorage.theme', localStorage.theme,  window.matchMedia('(prefers-color-scheme: dark)').matches)
        
        let theme = localStorage.getItem('theme');
        dispatch( toggleSwitch( theme ));
        
    }
}

const toggleSwitch =( theme )=>({
    type: types.toggleSwitch,
    payload: theme
})
