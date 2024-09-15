import { SxProps, Theme, useTheme } from '@mui/material';

interface NavbarStylesProps {
	[key: string]: SxProps<Theme>;
}

export const NavbarStyles = (): NavbarStylesProps => {
	const theme = useTheme();
	return {
		container: {
			position: 'fixed',
			top: 0,
			left: 0,
			width: '100%',
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			padding: '1rem',
			backgroundColor: theme.palette.primary.main,
		},
		logoContainer: {
			display: 'flex',
			alignItems: 'center',
			flexDirection: 'row',
		},
		logo: {
			width: '48px',
			height: '48px',
		},
		logoTitle: {
			marginLeft: '1rem',
		},
		logohref: {
			textDecoration: 'none',
			color: 'inherit',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
		navbarLinks: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			marginRight: '1rem',
		},
		navbarLinksHref: {
			textDecoration: 'none',
			color: 'inherit',
			padding: '1rem',
			'&[aria-disabled="true"]': {
				textDecoration: 'line-through',
				opacity: 0.5,
				pointerEvents: 'none',
				cursor: 'not-allowed',
			},
		},
	};
};
