import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers: {
        login: (state, {payload}) => {
            const { email, username, accessToken } = payload;
            state.email = email;
            state.username = username;
            state.accessToken = accessToken;
        },
        logout: (state) => {
            state.email = '';
            state.username = '';
            state.accessToken = '';
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// const saveToLocalStorage = ({email, username, accessToken}) => {
//     localStorage.setItem('email', email);
//     localStorage.setItem('username', username);
//     localStorage.setItem('accessToken', accessToken);
// };

// const getFromLocalStorage = (email, username, accessToken) => ({
//     email: localStorage.getItem('email', email) || '',
//     username: localStorage.getItem('username', username) || '',
//     accessToken: localStorage.getItem('accessToken', accessToken) || '',
// });

// export const userSlice = createSlice({
//     name: "user",
//     initialState: getFromLocalStorage,
//     reducers: {
//         login: (state, {payload}) => {
//             const { email, username, accessToken } = payload;
//             state.email = email;
//             state.username = username;
//             state.accessToken = accessToken;

//             saveToLocalStorage(payload);
//         },
//         logout: (state) => {
//             saveToLocalStorage({email: '', username: '', accessToken: ''});

//             state.email = localStorage.getItem('email') || '';
//             state.username = localStorage.getItem('username') || '';
//             state.accessToken = localStorage.getItem('accessToken') || '';
//         },
//     },
// });

// export const { login, logout } = userSlice.actions;
// export default userSlice.reducer;