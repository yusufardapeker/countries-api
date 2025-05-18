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
		filteredData: [],
	},
	reducers: {
		filterCountryByName: (state, action) => {
			state.filteredData = state.data.filter((country) =>
				country.name.common.toLowerCase().startsWith(action.payload.trim().toLowerCase())
			);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchCountries.fulfilled, (state, action) => {
			state.data = action.payload;
			state.filteredData = action.payload;
		});
	},
});

export const { filterCountryByName } = countrySlice.actions;

export default countrySlice.reducer;
