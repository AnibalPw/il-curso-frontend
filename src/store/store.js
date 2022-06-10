import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from '../reducer/rootReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// export const store = configureStore({
//     reducer: rootReducer,
// })

export const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware( thunk )
    )
)
