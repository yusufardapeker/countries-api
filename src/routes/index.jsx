import { createBrowserRouter, Outlet } from "react-router-dom";
import { MainLayout } from "../layouts/main-layout";
import { ErrorPage } from "../pages/error-page";
import { HomePage } from "../pages/home-page";
import { DetailPage } from "../pages/detail-page";
import { NotFoundPage } from "../pages/not-found-page";

export const routes = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{
				errorElement: <ErrorPage />,
				children: [
					{
						path: "/",
						element: <HomePage />,
					},

					{
						path: "/:name/*",
						element: <DetailPage />,
					},

					{
						path: "/*",
						element: <NotFoundPage />,
					},
				],
			},
		],
	},
]);
