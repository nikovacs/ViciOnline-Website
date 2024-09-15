import { Box, Typography } from '@mui/material';
import { MainStyles } from './styles';

interface MainProps {
	mt: number;
	mb: number;
}

const Main: React.FC<MainProps> = ({ mt, mb }) => {
	const styles = MainStyles();

	return (
		<Box
			sx={{
				marginTop: `${mt}px`,
				height: `calc(100vh - ${mt + mb}px)`,
				...styles.container,
			}}
		>
			<Box sx={styles.viciBrand}>
				<Typography variant="h1" color="white">
					Vici Online
				</Typography>
				<Typography variant="h4" color="white">
					Coming Soon
				</Typography>
			</Box>
			<Box sx={styles.viciDiscord}>
				<Typography variant="h3" color="white">
					Join our Discord
				</Typography>
				<iframe
					src="https://discord.com/widget?id=1162855961468346429&theme=dark"
					style={styles.discordIframe}
					sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
				/>
			</Box>
		</Box>
	);
};

export default Main;
