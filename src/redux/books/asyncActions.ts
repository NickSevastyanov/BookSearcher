import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IBooksSliceState, SearchbooksParams } from './types';


// const key = 'AIzaSyAF_ITjrjO9yk9l1yNS9nQTLF4zIq4KiNs'

export const fetchbooks = createAsyncThunk<IBooksSliceState, SearchbooksParams>(
  'books/fetchbooksStatus',
  async ({ search, category, sort }) => {
    const url = `https://www.googleapis.com/books/v1/volumes/`;
    const MainUrl = `${url}?q=${search}&key=AIzaSyDc25tuyICvu7cjAzeU81MvmaDzDDQI_eU&0&orderBy=${sort}&maxResults=40`;
    const SubjectUrl = `${url}?q=${search}+subject:${category}&key=AIzaSyDc25tuyICvu7cjAzeU81MvmaDzDDQI_eU&0&orderBy=${sort}&maxResults=40`;

    const { data } = await axios.get<IBooksSliceState>(
      `${category === 'all' ? MainUrl : SubjectUrl}`,
    );

    return data;
  },
);
