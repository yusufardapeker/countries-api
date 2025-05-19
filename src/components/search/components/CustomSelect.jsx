import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
	filterCountryByRegion,
	hideDropDown,
	resetSelectedRegion,
	toggleDropdown,
} from "../../../store/countrySlice";

import { clsx } from "clsx";

import { RxCross1 } from "react-icons/rx";

function CustomSelect() {
	const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
	const { selectedRegion, showDropdown } = useSelector((state) => state.countries);
	const dispatch = useDispatch();

	const handleChooseRegion = (e) => {
		dispatch(filterCountryByRegion(e.target.innerText));
		dispatch(hideDropDown());
	};

	const handleResetRegion = () => {
		dispatch(resetSelectedRegion());
		dispatch(hideDropDown());
	};

	return (
		<div className="custom-select">
			<button className="select-button" onClick={() => dispatch(toggleDropdown())}>
				<span>{selectedRegion || "Filter by Region"}</span>
				<IoIosArrowDown />
			</button>

			{showDropdown && (
				<ul className="custom-select-dropdown">
					{regions.map((region, index) => (
						<div
							key={index}
							className={clsx("dropdown-item", { selected: region === selectedRegion })}
						>
							<li onClick={(e) => handleChooseRegion(e)}>{region}</li>
							<RxCross1 className="cross-icon" onClick={handleResetRegion} />
						</div>
					))}
				</ul>
			)}
		</div>
	);
}

export { CustomSelect };
