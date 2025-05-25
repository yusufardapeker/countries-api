import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { fetchCountries } from "../../store/countrySlice";

function Main() {
	const { currentTheme } = useSelector((state) => state.countries);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCountries());
	}, []);

	return (
		<main data-theme={currentTheme}>
			<Outlet />
		</main>
	);
}

export { Main };
