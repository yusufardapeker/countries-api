import React from "react";
import { CountryList } from "../../components/country-list";
import { Search } from "../../components/search";

function HomePage() {
	return (
		<div>
			<Search />
			<CountryList />
		</div>
	);
}

export { HomePage };
