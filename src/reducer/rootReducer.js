import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { categoriesReducer } from "./categoriesReducer";
import { coursesInstructorReducer } from "./coursesInstructorReducer";

import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    categories: categoriesReducer,
    coursesI: coursesInstructorReducer,
    UI: uiReducer,

});