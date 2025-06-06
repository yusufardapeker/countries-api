import React from "react";
import { List } from "./components/List";
import { useDispatch, useSelector } from "react-redux";
import { EmptyScreen } from "./components/EmptyScreen";
import { Loading } from "./components/Loading";

function CountryList() {
	const { filteredData, loading } = useSelector((state) => state.countries);
	const dispatch = useDispatch();

	return (
		<div className="country-list">
			{loading &&
				Array(100)
					.fill(null)
					.map((_, index) => <Loading key={index} />)}

			{filteredData.length > 0 ? <List /> : <EmptyScreen />}
		</div>
	);
}

export { CountryList };
