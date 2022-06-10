import { types } from '../types/types';

const initialState = {
    course: [],
    // seccionesXcurso: [],
    activeCourse: null,
    // activeCursoEliminar: null,
    updateCurso: null,
    // usuariosUnidosCurso: [],
};

export const coursesInstructorReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        
        case types.courseLoaded:
            return {
                ...state,
                course: [ ...action.payload ]
            }

        case types.courseAddNew:
            return {
                ...state,
                course: [
                    ...state.course,
                    action.payload
                ]
            }

        case types.courseSetActive:
            return {
                ...state,
                activeCourse: {...action.payload}
            }

        default:
            return state;
    }


}