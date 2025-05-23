import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { fetchCountries } from "../../store/countrySlice";

function Main() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCountries());
	}, []);

	return (
		<main>
			<Outlet />
		</main>
	);
}

export { Main };
