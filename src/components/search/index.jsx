import React from "react";
import { SearchBar } from "./components/SearchBar";
import { CustomSelect } from "./components/CustomSelect";

function Search() {
	return (
		<div className="search">
			<SearchBar />
			<CustomSelect />
		</div>
	);
}

export { Search };
