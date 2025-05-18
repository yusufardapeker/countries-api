import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { store } from "./store";
import { Provider } from "react-redux";

import "./styles/reset.css";
import "./styles/main.scss";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<RouterProvider router={routes} />
		</Provider>
	</StrictMode>
);
