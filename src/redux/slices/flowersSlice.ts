import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

type FetchFlowersArgs = {
  order: string;
  sortBy: string;
  category: string;
  search: string;
  currentPage: number;
};

export const fetchFlowers = createAsyncThunk<Flower[], FetchFlowersArgs>(
  'flowers/fetchFlowersStatus',
  async (params) => {
    const { order, sortBy, category, search, currentPage } = params;
    const { data } = await axios.get<Flower[]>(
      `https://63c2c97de3abfa59bdb327f5.mockapi.io/items?page=${currentPage}&limit=9&${category}&sortBy=${sortBy}&order=${order}${search}`,
    );

    return data;
  },
);

type Flower = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface FlowersSliceState {
  items: Flower[];
  status: Status;
}

const initialState: FlowersSliceState = {
  items: [],
  status: Status.LOADING,
};

export const flowersSlice = createSlice({
  name: 'flowers',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<Flower[]>) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlowers.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchFlowers.pending, (state, action) => {
        state.items = [];
        state.status = Status.LOADING;
      })
      .addCase(fetchFlowers.rejected, (state, action) => {
        state.items = [];
        state.status = Status.ERROR;
      });
  },
});

export const { setItems } = flowersSlice.actions;

export default flowersSlice.reducer;
