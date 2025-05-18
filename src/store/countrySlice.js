// features/dataSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCountries = createAsyncThunk("data/fetchCountries", async () => {
	const res = await fetch("https://restcountries.com/v3.1/all");
	return await res.json();
});

const countrySlice = createSlice({
	name: "countries",
	initialState: {
		data: [],
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCountries.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchCountries.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.data = action.payload;
			})
			.addCase(fetchCountries.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export const {} = countrySlice.actions;

export default countrySlice.reducer;
