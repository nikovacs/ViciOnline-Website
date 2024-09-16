import { createTheme } from '@mui/material';

const theme = createTheme({
	palette: {
		primary: {
			main: '#FFB147',
		},
		secondary: {
			main: '#41AFEF',
		},
		background: {
			default: '#1a293f',
		},
		success: {
			main: '#DABFFF',
		},
		info: {
			main: '#c179b9',
		},
		text: {
			primary: '#fff',
			secondary: '#fff',
		},
	},
	typography: {
		fontFamily: 'Pixelify Sans',
		allVariants: {
			userSelect: 'none',
		},
	},
});

export default theme;
