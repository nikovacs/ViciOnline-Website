import { Box, Link, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { NavbarStyles } from './styles';
import image from '../../assets/vici_online_logo.png';

interface NavbarProps {
	onHeightChange?: (height: number) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHeightChange }) => {
	const styles = NavbarStyles();
	const [visible, setVisible] = useState(true);
	let lastScrollTop = 0;
	const navbarRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleResize = () => {
			if (navbarRef.current && onHeightChange) {
				const height = navbarRef.current.offsetHeight;
				console.log('Navbar height:', height); // Debugging
				onHeightChange(height);
			}
		};

		const resizeObserver = new ResizeObserver(handleResize);
		if (navbarRef.current) {
			resizeObserver.observe(navbarRef.current);
			handleResize(); // Initial height check
		}

		return () => {
			if (navbarRef.current) {
				resizeObserver.unobserve(navbarRef.current);
			}
		};
	}, [onHeightChange]);

	const handleScroll = () => {
		const currentScrollTop =
			window.scrollY || document.documentElement.scrollTop;

		if (currentScrollTop > lastScrollTop) {
			setVisible(false);
		} else {
			setVisible(true);
		}

		lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Box
			ref={navbarRef}
			sx={{
				...styles.container,
				transition: `transform 0.3s ease-in-out`,
				transform: visible ? 'translateY(0)' : 'translateY(-100%)',
			}}
		>
			<Box sx={styles.logoContainer}>
				<Link href="/" sx={styles.logohref}>
					<Box
						component={'img'}
						src={image}
						sx={styles.logo}
						alt="Vici Online Logo"
					/>
					<Typography variant="h4" sx={styles.logoTitle}>
						Vici Online
					</Typography>
				</Link>
			</Box>
			<Box sx={styles.navbarLinks}>
				<Link
					href="/download"
					sx={styles.navbarLinksHref}
					aria-disabled
				>
					<Typography>Download</Typography>
				</Link>
				<Link href="/forums" sx={styles.navbarLinksHref} aria-disabled>
					<Typography>Forums</Typography>
				</Link>
				<Link href="/help" sx={styles.navbarLinksHref} aria-disabled>
					<Typography>Help</Typography>
				</Link>
				<Link
					href="/documentation"
					sx={styles.navbarLinksHref}
					aria-disabled
				>
					<Typography>Documentation</Typography>
				</Link>
			</Box>
		</Box>
	);
};

export default Navbar;
