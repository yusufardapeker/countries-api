import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
	return (
		<div className="not-found-page">
			<p className="not-found-message">The page you are looking for is missing...</p>

			<Link to="/" className="go-home-button">
				Go Home
			</Link>
		</div>
	);
}

export { NotFoundPage };
