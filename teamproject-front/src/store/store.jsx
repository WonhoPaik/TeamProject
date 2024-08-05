import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice.jsx';

// Redux store 설정
const store = configureStore({
    reducer: {
        auth: authReducer, // auth 슬라이스 리듀서를 포함
    },
});

export default store;