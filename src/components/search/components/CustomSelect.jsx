import React from "react";
import { IoIosArrowDown } from "react-icons/io";

function CustomSelect() {
	return (
		<div className="custom-select">
			<button className="select-button">
				<span>Filter by Region</span>
				<IoIosArrowDown />
			</button>

			<ul className="custom-select-dropdown">
				<li>Africa</li>
				<li>America</li>
				<li>Asia</li>
				<li>Europe</li>
				<li>Oceania</li>
			</ul>
		</div>
	);
}

export { CustomSelect };
