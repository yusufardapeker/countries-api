import React from "react";
import { IoIosSearch } from "react-icons/io";

function SearchBar() {
	return (
		<div className="search-bar">
			<IoIosSearch className="search-icon" />
			<input type="text" className="search-input" placeholder="Search for a country..." />
		</div>
	);
}

export { SearchBar };
