import React from "react";
import { MdFindInPage } from "react-icons/md";

function EmptyScreen() {
	return (
		<div className="empty-screen">
			<p className="empty-screen-text">We could'nt find country that you're looking for</p>
			<MdFindInPage className="empty-screen-icon" />
		</div>
	);
}

export { EmptyScreen };
