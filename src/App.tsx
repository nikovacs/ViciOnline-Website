import { ThemeProvider } from '@mui/material';
import theme from './themes/theme.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import router from './router.tsx';

function App() {
	const routerObj = createBrowserRouter(router);

	return (
		<ThemeProvider theme={theme}>
			<RouterProvider router={routerObj} />
		</ThemeProvider>
	);
}

export default App;
