import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {fetchProducts} from '../../utils/api';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const products = await fetchProducts();
    return products;
  },
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [getProducts.pending]: state => {
      state.status = 'loading';
    },
    [getProducts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [getProducts.rejected]: state => {
      state.status = 'failed';
    },
  },
});

export default productSlice.reducer;
