import React, { useEffect, useRef } from 'react';
import { FooterStyles } from './styles';
import { Box, Typography } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';

interface FooterProps {
	onHeightChange: (height: number) => void;
}

const Footer: React.FC<FooterProps> = ({ onHeightChange }) => {
	const styles = FooterStyles();
	const footerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (footerRef.current && onHeightChange) {
			onHeightChange(footerRef.current.offsetHeight);
		}
	}, [onHeightChange]);

	return (
		<Box sx={styles.container} ref={footerRef}>
			<Typography variant="body1" sx={styles.footerTextContainer}>
				<CopyrightIcon fontSize="medium" sx={styles.copyIcon} />
				{new Date().getFullYear()} Vici Online
			</Typography>
		</Box>
	);
};

export default Footer;
