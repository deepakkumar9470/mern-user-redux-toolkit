import {configureStore} from '@reduxjs/toolkit'
import userReducer from './redux/userSlice';

const store = configureStore({
    reducer : {
       usersInfo : userReducer
    }
});

export default store;