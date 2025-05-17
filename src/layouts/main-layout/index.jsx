import React from "react";
import { Outlet } from "react-router-dom";

function MainLayout() {
	return (
		<>
			<div>MainLayout</div>
			<Outlet />
		</>
	);
}

export { MainLayout };
