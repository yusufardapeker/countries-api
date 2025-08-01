// features/dataSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const delay = (ms) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

export const fetchCountries = createAsyncThunk("data/fetchCountries", async () => {
	// This request is no longer available. More info (https://gitlab.com/restcountries/restcountries/-/issues/265)
	// const res = await fetch("https://restcountries.com/v3.1/all");

	await delay(500);
	const res = await fetch("/data.json");
	return await res.json();
});

const countrySlice = createSlice({
	name: "countries",
	initialState: {
		data: [],
		filteredData: [],
		selectedRegionData: [],
		searchedCountry: "",
		selectedRegion: "",
		showDropdown: false,
		loading: true,
		currentTheme: "light",
	},
	reducers: {
		searchCountryByName: (state, action) => {
			state.searchedCountry = action.payload.trim().toLowerCase();

			if (state.selectedRegion) {
				state.filteredData = state.selectedRegionData.filter((country) =>
					country.name.toLowerCase().startsWith(state.searchedCountry)
				);
			} else {
				state.filteredData = state.data.filter((country) =>
					country.name.toLowerCase().startsWith(state.searchedCountry)
				);
			}
		},

		filterCountryByRegion: (state, action) => {
			state.selectedRegion = action.payload;
			state.searchedCountry = "";

			state.selectedRegionData = state.data.filter(
				(country) => country.region === state.selectedRegion
			);

			state.filteredData = state.selectedRegionData;
		},

		resetSelectedRegion: (state) => {
			state.selectedRegion = "";
			state.searchedCountry = "";
			state.filteredData = state.data;
		},

		toggleDropdown: (state) => {
			state.showDropdown = !state.showDropdown;
		},

		hideDropdown: (state) => {
			state.showDropdown = false;
		},

		changeTheme: (state) => {
			state.currentTheme = state.currentTheme === "dark" ? "light" : "dark";
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCountries.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchCountries.fulfilled, (state, action) => {
				state.data = action.payload;
				state.filteredData = action.payload;
				state.loading = false;
			});
	},
});

export const {
	searchCountryByName,
	filterCountryByRegion,
	toggleDropdown,
	hideDropdown,
	resetSelectedRegion,
	changeTheme,
} = countrySlice.actions;

export default countrySlice.reducer;
