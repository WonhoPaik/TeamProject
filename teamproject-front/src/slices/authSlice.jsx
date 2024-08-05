import {createSlice} from '@reduxjs/toolkit';

// 초기 상태 정의
const initialState = {
    token: localStorage.getItem('authToken') || null,
};

// createSlice를 사용하여 slice 정의
const authSlice = createSlice({
    name: 'auth', // slice의 이름
    initialState, // 초기 상태
    reducers: {
        // login 액션 및 리듀서
        login: (state, action) => {
            state.token = action.payload; // 상태를 업데이트
            localStorage.setItem('authToken', action.payload); // 토큰을 로컬 스토리지에 저장
        },
        // logout 액션 및 리듀서
        logout: (state) => {
            state.token = null; // 토큰을 null로 설정하여 로그아웃 상태로 변경
            localStorage.removeItem('authToken'); // 로컬 스토리지에서 토큰 제거
        },
    },
});

// 액션 생성자(export)와 리듀서(export)를 export
export const {login, logout} = authSlice.actions;
export default authSlice.reducer;