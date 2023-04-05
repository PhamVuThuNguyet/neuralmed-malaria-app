import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { setUserData } from './reducer.js';

const store = configureStore({
    reducer: {
      user: setUserData,
    },
    middleware: [thunk],
});

export default store;