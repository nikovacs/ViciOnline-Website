import { SxProps, useTheme } from '@mui/material';
import { Theme } from '@mui/system';

interface InfoStylesProps {
	[key: string]: SxProps<Theme>;
}

export const InfoStyles = (): InfoStylesProps => {
	const theme = useTheme();

	return {
		container: {
			backgroundColor: theme.palette.background.default,
		},
		tabPanel: {
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '100%',
		},
		tabPanelText: {
			width: '50%',
			textAlign: 'center',
		},
	};
};
