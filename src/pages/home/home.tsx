import { Box } from '@mui/material';
import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import Main from './components/main';

const Home: React.FC = () => {
	const [navbarHeight, setNavbarHeight] = useState(0);
	const [footerHeight, setFooterHeight] = useState(0);

	const handleFooterHeightChange = (height: number) => {
		setFooterHeight(height);
	};

	const handleNavbarHeightChange = (height: number) => {
		setNavbarHeight(height);
	};

	return (
		<Box>
			<Navbar onHeightChange={handleNavbarHeightChange} />
			<Main mt={navbarHeight} mb={footerHeight} />
			<Footer onHeightChange={handleFooterHeightChange} />
		</Box>
	);
};

export default Home;
