import { Box, Tab, Tabs, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { InfoStyles } from './styles';

interface InfoProps {
	mb: number;
}

const Info: React.FC<InfoProps> = ({ mb }) => {
	const styles = InfoStyles();

	const [value, setValue] = useState(0);
	const [intervalBarProgress, setIntervalBarProgress] = useState(0);
	const handleChange = (_: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
		setIntervalBarProgress(0);
	};

	const TabPanel: React.FC = () => {
		const infos = [
			'Vici Online is an all-in-one platform that lets you play and create 2D MMOs. The platform also offers seamless publishing and sharing tools, allowing you to connect with a large community of players and creators. Join Vici Online today and unleash your creativity.',
			"This unique game is developed by gamers for gamers and encourages community feedback and suggestions. Players have the sources to create their own games, ensuring the game's longevity and continued evolution. It is a player-centered approach that makes for an enjoyable and engaging experience. See our docs for information on how to create your own game.",
			'This platform offers a variety of games for every gaming style, from classic RPGs to thrilling adventures. Our games have unique gameplay, frequent updates, and a user-friendly interface for easy game selection and socializing. Join our versatile hub for 2D MMO game enthusiasts.',
		];

		return (
			<Box sx={styles.tabPanel}>
				<Box sx={styles.tabPanelText}>
					<Typography color="textPrimary" variant="h5">
						{infos[value]}
					</Typography>
				</Box>
			</Box>
		);
	};

	useEffect(() => {
		const intervalBar = setInterval(() => {
			setIntervalBarProgress((prev) => (prev + 1) % 100);
		}, 100);

		return () => {
			clearInterval(intervalBar);
		};
	}, []);

	useEffect(() => {
		if (intervalBarProgress >= 99) {
			setValue((v) => (v === 2 ? 0 : v + 1));
		}
	}, [intervalBarProgress]);

	const intervalBar = (
		<Box
			sx={{
				width: `${intervalBarProgress}%`,
				backgroundColor: 'primary.main',
				height: '0.5rem',
				transition: 'width 0.1s linear',
			}}
		/>
	);

	return (
		<Box
			sx={{
				marginBottom: `${mb}px`,
				height: '50vh',
				...styles.container,
			}}
		>
			{intervalBar}
			<Tabs
				value={value}
				onChange={handleChange}
				textColor="secondary"
				variant="fullWidth"
			>
				<Tab label="About Vici Online" />
				<Tab label="Developed by the Community" />
				<Tab label="Player Experience" />
			</Tabs>
			<TabPanel />
		</Box>
	);
};

export default Info;
