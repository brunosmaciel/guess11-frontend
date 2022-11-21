/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type {PayloadAction} from '@reduxjs/toolkit';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

// Define a type for the slice state
type CounterState = {
	value: number;
	id: number;
};

// Define the initial state using that type
const initialState: CounterState = {
	value: 0,
	id: -1,
};

export const fetchData = createAsyncThunk('user/login', async (id: string, {rejectWithValue}) => {
	try {
		const response = await axios(`https://jsonplaceholder.typicode.com/todos/${id}`);
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return response.data;
	} catch (e: unknown) {
		console.log(e);
		return rejectWithValue(e);
	}
});

export const authSlice = createSlice({
	name: 'counter',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		increment(state) {
			state.value += 1;
		},
		decrement(state) {
			state.value -= 1;
		},
		// Use the PayloadAction type to declare the contents of `action.payload`
		incrementByAmount(state, action: PayloadAction<number>) {
			state.value += action.payload;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchData.fulfilled, (state, action) => {
				state.id = action.payload.id;
				console.log(action.payload);
			})
			.addCase(fetchData.rejected, (state, action) => {
				console.log(action);
			});
	},
});

export const {increment, decrement, incrementByAmount} = authSlice.actions;

export default authSlice.reducer;
