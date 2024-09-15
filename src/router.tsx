import { RouteObject } from 'react-router-dom';
import { Home } from './pages/home';
import { Error } from './pages/error';

export default [
	{
		path: '/',
		element: <Home />,
		errorElement: <Error />,
	},
] as RouteObject[];
