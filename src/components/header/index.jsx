import React from "react";
import { Link } from "react-router-dom";
import { IoMoonOutline, IoMoon } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../store/countrySlice";

function Header() {
	const { currentTheme } = useSelector((state) => state.countries);
	const dispatch = useDispatch();

	return (
		<header>
			<div className="header-container">
				<Link to="/">
					<p className="logo-text">Where in the world?</p>
				</Link>

				<div className="theme" onClick={() => dispatch(changeTheme())}>
					{currentTheme === "dark" ? <IoMoon /> : <IoMoonOutline />}
					<p className="theme-text">Dark Mode</p>
				</div>
			</div>
		</header>
	);
}

export { Header };
