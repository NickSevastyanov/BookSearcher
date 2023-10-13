import { configureStore } from '@reduxjs/toolkit'
import books from './books/slice'
import filters from './filter/slice'
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    books,
    filters
  },
})


export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();