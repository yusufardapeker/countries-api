import React from "react";

function Loading() {
	return (
		<div className="skeleton-element">
			<div className="skeleton-img"></div>

			<div className="skeleton-info-wrapper">
				<div className="skeleton-name"></div>

				<div className="skeleton-info">
					<div className="skeleton-info-element"></div>
					<div className="skeleton-info-element"></div>
					<div className="skeleton-info-element"></div>
				</div>
			</div>
		</div>
	);
}

export { Loading };
