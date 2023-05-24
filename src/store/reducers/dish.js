import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getDishList = createAsyncThunk(
    '/product/DishList',
    () => 
    axios.get('http://localhost:3001/dishes')
        .then(({data}) => data)
)

export const dishSlice = createSlice({
    name: 'dish',
    initialState: {
        list: [],
    },
    extraReducers: (builder) => {
        builder.addCase(
            getDishList.fulfilled,
            (state, {payload: data}) => {
                state.list = data;                
            },
        );
    },
});

export const {

} = dishSlice.actions;

export default dishSlice.reducer