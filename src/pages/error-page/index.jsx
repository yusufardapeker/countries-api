import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
	return (
		<div className="error-page">
			<p className="error-page-text">Something went wrong...</p>
			<Link className="go-list-button" to={"/"}>
				Go List Page
			</Link>
		</div>
	);
}

export { ErrorPage };
