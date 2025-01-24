import {configureStore} from "@reduxjs/toolkit";

import forminputReducer from './inputSlice';
import TeamReducer from './TeamSlice';

const store = configureStore({
    reducer:{
        updateinput:forminputReducer,
        TeamReducer:TeamReducer
    }
})

export default store;