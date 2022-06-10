import { types } from '../types/types';

const initialState = {
    categories: []
}

export const categoriesReducer = ( state = initialState, action ) => {

    switch (action.type) {
        
        case types.categoryLoaded:
            return {
                ...state,
                categories: [ ...action.payload ]
            }
    
        default:
            return state;
    }

}