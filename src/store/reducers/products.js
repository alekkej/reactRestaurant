import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    list: [],
    totalPrice: 0,
    productCount: 0,
  },
  reducers: {
    addToRedux: (state, {payload}) => {
      state.list.push(payload);
      
      state.totalPrice += payload.price;
      state.productCount++;
    },
    removeFromRedux: (state, {payload}) => {
      state.totalPrice -= state.list.find((dish) => dish.id === payload).price;

      state.list = state.list.filter((dish) => dish.id !== payload);
      state.productCount--;      
    },
  },
})


export const { addToRedux, removeFromRedux } = productSlice.actions
export default productSlice.reducer