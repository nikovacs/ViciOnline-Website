import { SxProps, Theme, useTheme } from '@mui/material';
import { CSSProperties } from 'react';

interface MainStylesProps {
	[key: string]: SxProps<Theme>;
	discordIframe: CSSProperties;
}

export const MainStyles = (): MainStylesProps => {
	const theme = useTheme();
	return {
		container: {
			backgroundColor: theme.palette.background.default,
			display: 'flex',
			justifyContent: 'space-between',
			padding: '1rem',
		},
		viciBrand: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			width: '50%',
		},
		viciDiscord: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			width: '50%',
		},
		discordIframe: {
			width: '100%',
			height: '50vh',
			border: 'none',
			marginTop: '1rem',
		},
	};
};
