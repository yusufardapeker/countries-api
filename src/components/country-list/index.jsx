import React, { useEffect } from "react";
import { List } from "./components/List";
import { useDispatch, useSelector } from "react-redux";
import { EmptyScreen } from "./components/EmptyScreen";
import { fetchCountries } from "../../store/countrySlice";

function CountryList() {
	const { filteredData } = useSelector((state) => state.countries);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCountries());
	}, []);

	return <div className="country-list">{filteredData.length > 0 ? <List /> : <EmptyScreen />}</div>;
}

export { CountryList };
