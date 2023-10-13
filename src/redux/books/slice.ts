import { createSlice } from '@reduxjs/toolkit';
import { fetchbooks } from './asyncActions';
import { IBooksSliceState } from './types';

const initialState: IBooksSliceState = {
  totalItems: 0,
  items: [],  
  status: '', // loading | success | error
};

const books = createSlice({
  name: 'books',
  initialState,
  reducers: {    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchbooks.pending, (state, action) => {
      state.status = 'loading';
    });

    builder.addCase(fetchbooks.fulfilled, (state, action) => {
      state.totalItems = action.payload.totalItems;
      state.items = action.payload.items
      state.status = 'success';
    });

    builder.addCase(fetchbooks.rejected, (state, action) => {
      state.status = 'error';
    });
  },
});


export default books.reducer;
