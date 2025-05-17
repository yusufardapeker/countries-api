import React from "react";
import { Link } from "react-router-dom";
import { IoMoonOutline } from "react-icons/io5";

function Header() {
	return (
		<header>
			<div className="header-container">
				<Link to="/">
					<p className="logo-text">Where in the world?</p>
				</Link>

				<div className="theme">
					<IoMoonOutline />
					<p className="theme-text">Dark Mode</p>
				</div>
			</div>
		</header>
	);
}

export { Header };
