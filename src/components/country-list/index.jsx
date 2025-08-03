import React, { useEffect, useState } from "react";
import { List } from "./components/List";
import { useDispatch, useSelector } from "react-redux";
import { EmptyScreen } from "./components/EmptyScreen";
import { Loading } from "./components/Loading";
import { setScrollLocation } from "../../store/countrySlice";

function CountryList() {
	const { filteredData, loading, scrollLocation } = useSelector((state) => state.countries);
	const dispatch = useDispatch();
	const [scrolledPixels, setScrolledPixels] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrolledPixels(window.scrollY);
			dispatch(setScrollLocation(scrolledPixels));
		};

		window.addEventListener("scroll", handleScroll);
	}, [scrollLocation]);

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
