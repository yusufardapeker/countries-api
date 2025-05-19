import React from "react";
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { searchCountryByName } from "../../../store/countrySlice";

function SearchBar() {
	const { searchedCountry } = useSelector((state) => state.countries);
	const dispatch = useDispatch();

	return (
		<label className="search-bar">
			<IoIosSearch className="search-icon" />
			<input
				type="text"
				className="search-input"
				placeholder="Search for a country..."
				onChange={(e) => dispatch(searchCountryByName(e.target.value))}
				value={searchedCountry}
			/>
		</label>
	);
}

export { SearchBar };
