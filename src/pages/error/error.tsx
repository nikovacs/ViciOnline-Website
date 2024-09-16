import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const Error: React.FC = () => {
	const theme = useTheme();
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
				width: '100vw',
				backgroundColor: theme.palette.background.default,
			}}
		>
			<Typography
				variant="h1"
				color="primary"
				sx={{
					userSelect: 'none',
					textShadow: '2px 2px 4px ' + theme.palette.error.main,
				}}
			>
				Error 404 - Page Not Found
			</Typography>
		</Box>
	);
};

export default Error;
