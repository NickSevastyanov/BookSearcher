import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilterSliceState } from './types';

const initialState: IFilterSliceState = {
  searchValue: '',
  category: 'all',
  sort: 'relevance',
};

const filters = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    setSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
  },
});

export const { setSearchValue, setCategory, setSort } = filters.actions;

export default filters.reducer;
