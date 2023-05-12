import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { apiUsers } from './apiUsers';
import { apiBooks } from './apiBooks';

import { sliceAppViews } from './sliceAppViews';
import { sliceModals } from './sliceModals';

const reducer = {
    [sliceAppViews.name]: sliceAppViews.reducer,
    [sliceModals.name]: sliceModals.reducer,
    [apiUsers.reducerPath]: apiUsers.reducer,
    [apiBooks.reducerPath]: apiBooks.reducer,
};

const middleware = getDefaultMiddleware => {
    return getDefaultMiddleware()
        .concat(apiUsers.middleware)
        .concat(apiBooks.middleware);
};

/**
 * For test purposes
 * https://redux.js.org/usage/writing-tests
 *
 * Returns the initial app store state, mutated with the provided 'preloadedState'.
 * @param {Object} preloadedState
 * @returns `object`
 */
export const setupStore = preloadedState => {
    return configureStore({
        // rootReducer
        reducer: combineReducers({
            ...reducer,
        }),
        middleware,
        preloadedState,
    });
};

export const store = configureStore({ reducer, middleware });

setupListeners(store.dispatch);
