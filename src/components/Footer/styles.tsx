import { SxProps, Theme, useTheme } from '@mui/material';

interface FooterStylesProps {
	[key: string]: SxProps<Theme>;
}

export const FooterStyles = (): FooterStylesProps => {
	const theme = useTheme();

	return {
		container: {
			position: 'fixed',
			bottom: 0,
			left: 0,
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			padding: '1rem',
			backgroundColor: theme.palette.primary.main,
		},
		footerTextContainer: {
			display: 'flex',
			alignItems: 'center',
			userSelect: 'none',
		},
		copyIcon: {
			marginRight: '0.5rem',
		},
	};
};
